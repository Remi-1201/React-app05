export const StyledJsx = () => {
  return (
    <>
      {/* className was copied from <style jsx> below */}
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT !!</button>
      </div>

      {/* Write CSS inside {``}
      Copied from CssModules.module.scss */}
      <style jsx="true">{`
        .container {
          border: solid 2px #c5dedd;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #003049;
        }
        .button {
          background-color: #fde2e4;
          border: none;
          padding: 8px;
          border-radius: 8px;

          // StyledJsxでは疑似要素が使えない
          // &:hover {
          //   background-color: #99c1de;
          //   color: white;
          //   cursor: pointer;
          // }
        }
      `}</style>
    </>
  );
};
