import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <form action="/" method="post">
        <input type="hidden" name="secret" value="helpppp" />
        <button type="submit">Brick Me</button>
      </form>
    </div>
  );
};

export default Home;
