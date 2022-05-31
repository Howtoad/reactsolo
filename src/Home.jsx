import { css } from "@emotion/react";
import Agents from "./Agents";
/** @jsxImportSource @emotion/react */
const Home = () => {
  const styles = {
    hometext: css`
      & h1 {
        color: red;
        margin-bottom: 5px;
      }
      & p {
        font-size: 18px;
        line-height: 1.5;
      }
    `,
  };
  return (
    <>
      <div css={styles.hometext}>
        <h1>Our Pilots</h1>
        <p>
          Curabitur ut ex non mauris pellentesque sagittis a sit amet mi. Nullam
          efficitur venenatis felis, ac posuere eros imperdiet in. Vivamus
          turpis dui, lobortis malesuada ipsum vel, fermentum fermentum ex.
          Aliquam blandit, libero eget vestibulum condimentum, metus ante
          elementum neque, nec vulputate arcu risus sit amet quam. Praesent sed
          arcu dapibus, mollis metus id, porta lorem. Nam eleifend orci massa,
          vel posuere neque fermentum luctus. Praesent maximus consectetur
          metus, at tincidunt tortor iaculis feugiat. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vestibulum finibus varius nulla, at elementum leo accumsan nec. Proin
          in libero viverra, hendrerit sapien in, tempor lacus. Nam vestibulum
          lacinia elit a vestibulum. Sed sit amet justo est. Proin euismod, orci
          nec rhoncus semper, libero tellus fermentum orci, ac vehicula lacus
          elit vitae orci.
        </p>
      </div>
      <Agents />
    </>
  );
};

export default Home;
