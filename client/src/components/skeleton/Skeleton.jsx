import "./skeleton.css";
import { CircularProgress } from "@material-ui/core";

const Skeleton = ({ type }) => {
  const COUNTER = 8;
  const FeedSkeleton = () => (
    <div className="postSk">
      <div className="postSkImg"></div>
      <div className="postSkInfo">
        <div className="postSkAvatar"></div>
        <div className="postSkDetail">
          <div className="postSkText"></div>
          <div className="postSkText sm"></div>
        </div>
      </div>
    </div>
  );

  const TopSkeleton = () => (
    <div className="topSk">
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkImg"></div>
    </div>
  );

  const MenuSkeleton = () => (
    <div className="menuSk">
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
    </div>
  );

  const Circle = () => (
    <div className="circle">
      <CircularProgress />
    </div>
  );

  const CustomLoading = () => (
    <div className="custom">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText">Loading...</span>
    </div>
  );

  const RotateLoading = () => (
    <div className="rotate">
      <div class="loading">
        <span>Loading...</span>
      </div>
    </div>
  );

  if (type === "feed")
    return Array(COUNTER)
      .fill()
      .map((item, index) => <FeedSkeleton key={index} />);
  if (type === "top") return <TopSkeleton />;
  if (type === "menu") return <MenuSkeleton />;
  if (type === "circle") return <Circle />;
  if (type === "custom") return <CustomLoading />;
  if (type === "rotate") return <RotateLoading />;
};

export default Skeleton;
