import React from 'react';
import {
  PolymorphicComponentWithRef,
  PolymorphicRef,
} from '../../types/polymorphic.types';
import { VariantProps } from '../../types/cv.types';
import flexVariants from './variants';

namespace Flex {
  type Elements = 'div' | 'span' | 'ul' | 'li';
  export type Ref = PolymorphicRef<Elements>;
  export type Props = PolymorphicComponentWithRef<
    Elements,
    VariantProps<typeof flexVariants>
  >;
}

const Flex = React.forwardRef((props: Flex.Props, ref: Flex.Ref) => {
  const {
    as,
    className,
    p,
    px,
    py,
    ps,
    pe,
    pt,
    pb,
    m,
    mx,
    my,
    ms,
    me,
    mt,
    mb,
    gap,
    gapX,
    gapY,
    display,
    position,
    aspectRatio,
    border,
    borderTop,
    borderBottom,
    borderRight,
    borderLeft,
    divideX,
    divideY,
    radius,
    borderColor,
    backgroundColor,
    opacity,
    alignItems,
    alignContent,
    alignSelf,
    justifyContent,
    justifySelf,
    justifyItems,
    placeContent,
    placeItems,
    placeSelf,
    flex,
    flexBasis,
    flexDirection,
    gridColumnSpan,
    gridRowSpan,
    cursor,
    pointerEvent,
    resize,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    scale,
    rotate,
    skewX,
    skewY,
    translateX,
    translateY,
    transition,
    transitionDelay,
    transitionDuration,
    transitionTimingFunction,
    pseudos,
    ...rest
  } = props;
  const Component = (as || 'div') as React.ElementType;

  return (
    <Component
      ref={ref}
      className={flexVariants({
        p,
        px,
        py,
        ps,
        pe,
        pt,
        pb,
        m,
        mx,
        my,
        ms,
        me,
        mt,
        mb,
        gap,
        gapX,
        gapY,
        display,
        position,
        aspectRatio,
        border,
        borderTop,
        borderBottom,
        borderRight,
        borderLeft,
        divideX,
        divideY,
        radius,
        borderColor,
        backgroundColor,
        opacity,
        alignItems,
        alignContent,
        alignSelf,
        justifyContent,
        justifySelf,
        justifyItems,
        placeContent,
        placeItems,
        placeSelf,
        flex,
        flexBasis,
        flexDirection,
        gridColumnSpan,
        gridRowSpan,
        cursor,
        pointerEvent,
        resize,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        scale,
        rotate,
        skewX,
        skewY,
        translateX,
        translateY,
        transition,
        transitionDelay,
        transitionDuration,
        transitionTimingFunction,
        pseudos,
        className,
      })}
      {...rest}
    />
  );
});

export default Flex;
