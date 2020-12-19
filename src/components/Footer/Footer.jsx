//modules
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import { RiTwitterLine, RiLinkedinBoxLine } from "react-icons/ri";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/Moonbladez"
                aria-label="link to github"
              >
                <FaGithubAlt />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jegheterbekki"
                aria-label="link to twitter"
              >
                <RiTwitterLine />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rebecca-young83/"
                aria-label="link to Linkedin"
              >
                <RiLinkedinBoxLine />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.footer__copyright}>made with love Bulu Design</div>
    </footer>
  );
}
