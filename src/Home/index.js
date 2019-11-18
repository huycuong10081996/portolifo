import React, { PureComponent } from "react";
import styles from "./home.module.css";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import AOS from "aos";

const Bounce = styled.div`
  animation: 12s ${keyframes`${bounce}`} infinite;
  color: white;
  text-align: center;
  font-family: "Kaushan Script", cursive;
`;
const Bounces = styled.div`
  animation: 5s ${keyframes`${bounce}`} infinite;
  color: white;
  text-align: center;
  font-family: "Kaushan Script", cursive;
  padding-bottom: 22px;
`;

class Home extends PureComponent {
  render() {
    AOS.init();
    return (
      <div className={styles.wrapper}>
        <div className={styles.slider__container}>
          <Bounce>
            <h1>Hello Everyone !</h1>
          </Bounce>
          <h4 className={styles.speaking}>
            "I like something good for you and me. I also make everything best
            for my client. "
          </h4>
          <div className={styles.name}>
            <h1>- My name's Cường Nguyễn -</h1>
            <h4>Web Developer</h4>
          </div>
          <div className={styles.croll}>
            <Bounces>
              <img
                src="https://cdn.vn.garenanow.com/web/fo3/fo4/home-page/images/mouse-outline.png"
                alt=""
              />
              <p>
                <a href="#aboutMe">Scroll the mouse</a>
              </p>
            </Bounces>
          </div>
        </div>
        <div id="aboutMe" data-aos="fade-right" className={styles.about}>
          <div className={styles.about__title}>
            <h2>About Me</h2>
          </div>

          <div className={styles.about__avatar}>
            <img
              src="https://huycuong10081996.github.io/portolifo/assets/46499158_906532309541687_735503026202083328_n.jpg"
              alt=""
            />
          </div>

          <div className={styles.about__content}>
            <div className={styles.about__content__left}>
              <ul className={styles.info__title}>
                <li>
                  <p>
                    <strong>Name:</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Phone:</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Email:</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Github:</strong>
                  </p>
                </li>
              </ul>
              <ul className={styles.info__content}>
                <li>
                  <p>Nguyễn Huy Cường</p>
                </li>
                <li>
                  <p>084 5555 279</p>
                </li>
                <li>
                  <p>huycuong10081996@gmail.com</p>
                </li>
                <li>
                  <p>huycuong10081996</p>
                </li>
              </ul>
            </div>
            <div className={styles.about__content__right}>
              <div className={styles.about__content__right__title}>
                <h3>Hi Everyone!</h3>
                <p>
                  I'm a student. I’m extremely passionate about web development
                  especially Frontend Development, helping businesses and
                  improve their online presence.
                </p>
                <p>
                  Currently, I have studied Nong Lam University (2016-2020),I
                  have finished Frontend Development Course in Nordic Coder and
                  had over 2 months of working experience in ReactJs. But now I
                  want to continue develop the user interface (FrontEnd) and do
                  it well
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className={styles.exp}>
          <div className={styles.exp__container}>
            <div className={styles.exp__title}>
              <h2>Other Skills</h2>
            </div>
            <div className={styles.exp__wrapper}>
              <div data-aos="flip-left" className={styles.exp__content}>
                <div className={styles.exp__img}>
                  <img
                    src="https://huycuong10081996.github.io/portolifo/assets/design.png"
                    alt=""
                  />
                </div>
                <div className={styles.exp__content__text}>
                  <h4>UX/UI</h4>
                  The main goal of any business is to increase sales and
                  increase its growth. UX / UI design plays an essential role in
                  achieving this goal and I I have experience about it
                </div>
              </div>
              <div data-aos="flip-left" className={styles.exp__content}>
                <div className={styles.exp__img}>
                  <img
                    src="https://huycuong10081996.github.io/portolifo/assets/inspiration.png"
                    alt=""
                  />
                </div>
                <div className={styles.exp__content__text}>
                  <h4>Creation</h4>
                  The world needs your great ideas, as a developer, not a coder
                  and I always develop my creative skills
                </div>
              </div>
              <div data-aos="flip-left" className={styles.exp__content}>
                <div className={styles.exp__img}>
                  <img
                    src="https://huycuong10081996.github.io/portolifo/assets/teamwork.png"
                    alt=""
                  />
                </div>
                <div className={styles.exp__content__text}>
                  <h4>Teamwork</h4>
                  At work, the ability to work in teams is indispensable for all
                  fields, So I always want and constantly search for good
                  teammates for the job I love
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.technical__wrapper}>
          <h2>Technology</h2>
          <div className={styles.technical__container}>
            <div data-aos="zoom-in" className={styles.item}>
              <p>HTML5 & CSS3</p>
            </div>
            <div data-aos="zoom-in" className={styles.item}>
              <p>JAVASCRIPT</p>
            </div>
            <div data-aos="zoom-in" className={styles.item}>
              <p>REACTJS</p>
            </div>
            <div data-aos="zoom-in" className={styles.item}>
              <p>REDUX</p>
            </div>
            <div data-aos="zoom-in" className={styles.item}>
              <p>GIT</p>
            </div>
          </div>
        </div>

        {/* <div className={styles.project__wrapper}>
          <div className="container">
            <h2>Technology</h2>
          </div>
        </div> */}

        <div className={styles.contact__wrapper}>
          <div class="container contact">
            <div class="row">
              <div class="col-md-3">
                <div class="contact-info">
                  <img
                    src="https://image.ibb.co/kUASdV/contact-image.png"
                    alt="image"
                  />
                  <h2>Contact Me</h2>
                  <h4>I would love to hear from you !</h4>
                </div>
              </div>
              <div class="col-md-9">
                <div class="contact-form">
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="fname">
                      First Name:
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="fname"
                        placeholder="Enter First Name"
                        name="fname"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="lname">
                      Last Name:
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="lname"
                        placeholder="Enter Last Name"
                        name="lname"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="email">
                      Email:
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="comment">
                      Comment:
                    </label>
                    <div class="col-sm-10">
                      <textarea
                        class="form-control"
                        rows="5"
                        id="comment"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-default">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          © 2019 Cường Nguyễn. All Rights Reserved.
        </div>
      </div>
    );
  }
}

export default Home;
