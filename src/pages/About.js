import React, { Fragment } from "react";
import Container from "../components/About/Container";
import Loader from "../components/Loader";
import { useQuery, gql } from "@apollo/client";

import styles from "../styles/About/Container.module.css";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiHeroku,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiGraphql,
} from "react-icons/si";
import DownloadCV from "../components/About/DownloadCV";

const UPLOAD_FILES = gql`
  query Files {
    uploadFiles(filters: { name: { contains: "Razvan WebDev CV" } }) {
      data {
        id
        attributes {
          name
          hash
          ext
          createdAt
          url
        }
      }
    }
  }
`;

export const About = () => {
  const { error, loading, data } = useQuery(UPLOAD_FILES);

  return (
    <Container>
      {error ? <p>{error.message}</p> : null}
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section className={styles.About__Bio}>
            <h1 className={styles.bounce2}>About Me</h1>
            <div className="fadeIn">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
                nisl id tortor semper lobortis. Suspendisse tristique velit sit
                amet leo tempus, vel facilisis tellus sollicitudin. Nulla at
                ipsum eu arcu dapibus vestibulum. Suspendisse iaculis metus
                eros, sed consequat lorem tempor in. In elementum, quam sed
                facilisis porta, arcu orci euismod ante, eget tristique quam
                urna a quam. Donec euismod ultrices dapibus. Sed purus eros,
                mollis at fermentum id, accumsan et diam. Maecenas a ante
                rutrum, egestas diam sagittis, sollicitudin leo. Curabitur
                rhoncus, elit sit amet laoreet accumsan, magna metus venenatis
                nibh, a interdum arcu eros vitae augue.
              </p>

              <p>
                Nulla eget tristique sapien. Suspendisse pulvinar id metus id
                dignissim. Quisque nec feugiat orci. Nullam vel nisi id sapien
                auctor vestibulum. Sed id eleifend purus. Aenean sagittis at
                nisi id pellentesque. Vestibulum mauris neque, accumsan sit amet
                risus eu, dapibus luctus felis. Maecenas quis orci urna. Morbi
                et rutrum ipsum. Pellentesque finibus venenatis nunc. Donec a
                lobortis quam. Etiam elit lectus, tempus sit amet dolor in,
                pulvinar porta lacus. Nullam eu felis eros. Quisque massa
                tellus, mollis a eros at, tincidunt imperdiet erat.
              </p>
            </div>
          </section>
          <section className={styles.About__Technologies}>
            <h1>Technologies</h1>
            <div>
              <SiJavascript />
              <SiReact />
              <SiGraphql />
              <SiNodedotjs />
              <SiGit />
              <SiHeroku />
              <SiMysql />
              <SiPostgresql />
              <SiPython />
            </div>
          </section>
          <section className={styles.About__Contact}>
            <h1>Contact</h1>
            <div>
              <a
                className={styles.emailMe}
                href="mailto:razvan.cretu97@gmail.com"
                rel="noreferrer"
              >
                Email Me
              </a>
              <DownloadCV cv={data.uploadFiles.data[0]} />
            </div>
          </section>
        </Fragment>
      )}
    </Container>
  );
};
