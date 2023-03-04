import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../footer.module.css'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={6}>
            <p>Apple-Store</p>
            <p>
              <span>© 2012 - 2023 Apple Room - Магазин та сервісний центр</span>
            </p>
            <ul className={styles.list_inline}>
              <li className={styles.img_item}>
                <a href="https://www.facebook.com/">
                  <img src="images/social-icons/icon-facebook.png" alt="" />
                </a>
              </li>
              <li className={styles.img_item}>
                <a href="https://www.instagram.com/">
                  <img src="images/social-icons/icon-instagram.png" alt="" />
                </a>
              </li>
              <li className={styles.img_item}>
                <a href="https://www.youtube.com/">
                  <img src="images/social-icons/icon-youtube.png" alt="" />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h3>Каталог</h3>
            <ul className="list-unstyled">
              <li className={styles.list_item}>
                <a href="">iPhone</a>
              </li>
              <li className={styles.list_item}>
                <a href="#">Mac</a>
              </li>
              <li className={styles.list_item}>
                <a href="#">Ipad</a>
              </li>
              <li className={styles.list_item}>
                <a href="#">Apple Watch</a>
              </li>
              <li className={styles.list_item}>
                <a href="#">Air Pods</a>
              </li>
              <li className={styles.list_item}>
                <a href="#">Aксессуари</a>
              </li>
              <li className={styles.list_item}>
                <a href="#">Гаджета</a>
              </li>
              <li className={styles.list_item}>
                <a href="">БУ техніка</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h3>Контакти</h3>
            <ul className="list-unstyled">
              <li>Старий бульвар, 2/26, м.Житомир, Житомирська область</li>
              <li>+380630145134 (з 9:00 до 22:00)</li>
              <li>apple_store@gmail.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copy-right">
        <Container>
          <Row>
            <Col md={12}>
              <p>&copy;Made by Nikita Drzhevetskyi 2023</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;