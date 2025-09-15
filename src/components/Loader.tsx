// SmoothBurstLoader.tsx
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  size?: number; // diameter in px (default 72)
  color?: string; // stroke color of the circle
  strokeWidth?: number; // thickness of ring
  style?: ViewStyle;
};

const SmoothBurstLoader: React.FC<Props> = ({
  size = 30,
  color = '#DC3535',
  strokeWidth = 4,
  style,
}) => {
  const rotate = useRef(new Animated.Value(0)).current; // 0..1 -> rotation
  const scale = useRef(new Animated.Value(1)).current; // scale pulse
  const sweep = useRef(new Animated.Value(0)).current; // controls arc cutout (optional visual)

  useEffect(() => {
    // Rotation pattern: slow smooth, slow smooth, sudden fast burst. Then repeat.
    const slowDuration = 2400;
    const verySlowDuration = 3600;
    const fastDuration = 400; // sudden fast burst

    const rotationSequence = Animated.sequence([
      // slow smooth rotate (clockwise)
      Animated.timing(rotate, {
        toValue: 0.33, // 120deg
        duration: slowDuration,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),
      // very slow smooth rotate
      Animated.timing(rotate, {
        toValue: 0.66, // 240deg
        duration: verySlowDuration,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      // fast burst to full circle
      Animated.timing(rotate, {
        toValue: 1, // 360deg
        duration: fastDuration,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      // reset to 0 immediately (so next loop begins fresh)
      Animated.timing(rotate, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]);

    // Scale pulse: slow inhale-exhale, then a quick pop during the fast burst
    const scaleSequence = Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.94,
        duration: 1000,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1.02,
        duration: 1200,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      // quick pop to 1.12 during fast burst
      Animated.timing(scale, {
        toValue: 1.12,
        duration: fastDuration,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 120,
        easing: Easing.out(Easing.circle),
        useNativeDriver: true,
      }),
    ]);

    // Optional small sweep animation to create a dynamic arc feel
    const sweepSequence = Animated.sequence([
      Animated.timing(sweep, {
        toValue: 0.6,
        duration: slowDuration + verySlowDuration,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(sweep, {
        toValue: 1,
        duration: fastDuration,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(sweep, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]);

    // Loop the sequences in parallel for continuous effect
    const looping = Animated.loop(
      Animated.parallel([rotationSequence, scaleSequence, sweepSequence]),
      { iterations: -1 },
    );

    looping.start();

    return () => looping.stop();
  }, [rotate, scale, sweep]);

  // Interpolate rotate (0..1) -> deg
  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Interpolate sweep to adjust strokeDashoffset (gives an arc-like feel)
  // NOTE: this is a simple trick using strokeDashoffset on an SVG-like border replacement
  const sweepInterpolated = sweep.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const ringSize = size;
  const borderStyle = {
    width: ringSize,
    height: ringSize,
    borderRadius: ringSize / 2,
    borderWidth: strokeWidth,
    borderColor: color,
    borderLeftColor: 'rgba(0,0,0,0.12)', // give a cutout contrast so rotation looks like movement
    borderBottomColor: 'rgba(0,0,0,0.07)',
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          {
            transform: [{ rotate: rotateInterpolate }, { scale }],
          },
        ]}
      >
        {/* Outer ring that visually rotates */}
        <Animated.View
          style={[borderStyle, styles.ring, { overflow: 'hidden' }]}
        >
          {/* inner overlay to accent a moving arc (fake arc by overlaying a colored semicircle) */}
          <Animated.View
            style={[
              styles.arcOverlay,
              {
                width: ringSize,
                height: ringSize,
                borderRadius: ringSize / 2,
                transform: [
                  {
                    // rotate the overlay a bit based on sweep -- subtle movement
                    rotate: sweepInterpolated.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '60deg'],
                    }),
                  },
                ],
                // slight opacity change to accent the burst
                opacity: sweepInterpolated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.08, 0.45],
                }),
              },
            ]}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default SmoothBurstLoader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  arcOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    // using radial overlay with gradient-like color is not built-in — this is a subtle opaque overlay
    backgroundColor: '#ffffff',
    mixBlendMode: 'overlay' as any, // harmless; RN will ignore if not supported
  },
});
