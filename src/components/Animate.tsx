
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props {
    children: JSX.Element;
    style?: string;
    hidden?: {}
}

export const Animate = ({ children, style, hidden = {opacity: 0, y: 75} }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    })

    return (
        <div ref={ref} className={"relative " + style}>
            <motion.div
                variants={{
                    hidden: hidden,
                    visible: { opacity: 1, y: 0, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.30 }}
            >
                {children}
            </motion.div>
        </div>
    )
}