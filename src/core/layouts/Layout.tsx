import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Image from "next/image";
import styles from "../styles/Layout.module.css"

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Image 
        src="/hero.png"
        alt="logo"
        width={250}
        height={100}
      ></Image>
    </div>
  )
}

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "CongresoVerificacion"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div style={{paddingBottom:"5rem" }}>
        {children}
      </div>
    </>
  )
}

export default Layout
