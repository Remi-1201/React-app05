// 2- classes = 任意な名称
import classes from "./CssModules.module.scss";

// 2- The library "node-sass" added
export const CssModules = () => {
  return (
    // 2- [.container] = [CssModules.module.scss]'s class
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT !!</button>
    </div>
  );
};
