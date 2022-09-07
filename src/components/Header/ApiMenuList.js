import classes from "./ApiMenuList.module.css";
import ApiMenuItem from "./ApiMenuItem";

const ApiMenulist = (props) => {
  const changeCurrentIndex = (index) => {
    props.changeCurrentIndex(index);
  };

  const menuList = props.apiObjectData.map((item, i) => {
    return (
      <ApiMenuItem
        key={i}
        value={i}
        name={item.name}
        changeCurrentIndex={changeCurrentIndex}
        activeIndex={props.activeIndex}
      />
    );
  });

  return <ul className={classes.list}>{menuList}</ul>;
};

export default ApiMenulist;
