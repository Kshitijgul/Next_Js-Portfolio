import React from 'react'
import styles from "./styles.module.scss"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide } from '../../animation';

const index = ({data}) => {
  return (
    <motion.div custom={data.index} variants={slide} initial="intial" exit="exit" animate="enter">
        <Link href={data.href}>
        {data.title}
    </Link>

    </motion.div>

  )
}

export default index