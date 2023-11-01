import logoutIcon from "../Icons/logout.svg";
import searchIcon from "../Icons/Component_32.svg";
import filterIcon from "../Icons/Component 39 (2).svg";
import { navIconsArr } from "../components/NavIconArray";
import { PostList } from "../components/PostArray";
import { photoRating } from "../components/PhotoPrice";
import { photoGrapherList } from "../components/PhotographerList";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Home() {
  let navigate = useNavigate();

  let auth = getAuth();
  let signOutBtn = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMsg = error.message;
        console.log(errorCode);
        console.log("Error Messagtes >>> ", errorMsg);
      });
  };

  let Navigations = navIconsArr.map((navVal) => {
    return (
      <div className="navBox" key={navVal.id}>
        <span>
          <img src={navVal.IconType} alt={navVal.alt} />
        </span>
        <span>{navVal.title}</span>
      </div>
    );
  });
  let postDetails = PostList.map((postVal) => {
    return (
      <div className="sectionContainer" key={postVal.id}>
        <div className="sectionTopBox">
          <div>
            <span>
              <img
                className="createrImg"
                src={postVal.createrImg}
                alt={postVal.createrName + postVal.createrId}
              />
            </span>
          </div>
          <div className="nameDiv">
            <span>{postVal.createrName}</span>
            <p>{postVal.createrId}</p>
          </div>
          <div className="divmenuBox">
            <span>
              <div></div>
              <div></div>
              <div></div>
            </span>
          </div>
        </div>
        <div className="sectionMidBox">
          <div>
            <p className="titleBox">
              {postVal.title}
              <span className="text-red-400">Read More </span>
            </p>
          </div>
          <div className="postDiv">
            <img
              id="postImage"
              src={postVal.postImg}
              alt={postVal.createrName + postVal.createrId}
            />
            <span>
              {" "}
              <img
                className="heartIconImage"
                src={postVal.heartIcon}
                alt={"Heart_Icon" + postVal.id}
              />
            </span>
          </div>
        </div>
        <div className="sectionBottomBox">
          <div className="footerSect flex justify-start">
            <div className="likedivclass">
              <img id="likeIconId" src={postVal.likeIcon} alt="heartDark" />
              <span>{postVal.likesNum}</span>
            </div>
            <div className="commentdivclass">
              <img id="commentIconId" src={postVal.commentIcon} alt="comment" />
              <span>{postVal.commentNum}</span>
            </div>
            <div className="sharedivClass">
              <img id="shareIconId" src={postVal.shareIcon} alt="share" />
              <span>{postVal.shareNum}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  let photoPrice = photoRating.map((imagesRate) => {
    return (
      <div className="cardImg" key={imagesRate.id}>
        <img id="imgListId" src={imagesRate.photo} />
        <div className="cardcaption">
          <p>{imagesRate.description}</p>
          <div className="pricedivclass">
            <span id="priceSpanId">${imagesRate.price}</span>
            <span className="ratingIconspan">
              <img src={imagesRate.rating} />
              <img src={imagesRate.rating} />
              <img src={imagesRate.rating} />
              <img src={imagesRate.rating} />
              <img src={imagesRate.rating} />
            </span>
          </div>
        </div>
      </div>
    );
  });
  let photographerDeatils = photoGrapherList.map((data) => {
    return (
      <div key={data.id} className="artistBoxclass">
        <div>
          <img
            className="artistImgclass"
            src={data.photo}
            alt={data.photographerName}
          />
        </div>
        <div className="artistCardimgdiv">
          <div className="dotdivclass"></div>
          <img
            className="photographerImg"
            src={data.photographerImg}
            alt={data.photoNameId}
          />
        </div>
        <div className="artistNameclass">
          <span>{data.photographerName}</span>
          <p>{data.photoNameId}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="homeContainer">
      <div className="flex ">
        <div className="leftBox">
          <div className="leftHeader">
            <span id="logoId">LOGO</span>
          </div>
          <div className="leftSection">
            <div>{Navigations}</div>
            <div className="leftFooter">
              <span>
                <img src={logoutIcon} alt="LogOut" />
              </span>
              <span onClick={signOutBtn}>LogOut</span>
            </div>
            <div className="leftbottom">
              <span>2022©logo name</span>
              <span>Developed by ivan Infotech</span>
            </div>
          </div>
        </div>
        <div className="midBox ">
          <div className="midHeader">
            <div className="searchBox">
              <span>
                {" "}
                <img className="searchIconImg" src={searchIcon} />
              </span>
              <input
                type="text"
                className="searchIpt"
                placeholder="search here ..."
              />
            </div>
            <div className="filterBox">
              <span>
                <img src={filterIcon} alt="Filter" />
              </span>
              <span className="filterTxt">Filter</span>
            </div>
          </div>
          <div className="sectionBox">{postDetails}</div>
        </div>
        <div className="rightBox">
          <div className="rightHeader">
            <button className="btnclass">Become a Seller</button>
          </div>
          <div className="rightSection">
            <div className="rightTop">
              <span id="artistTitleId"> Artist</span>
              <span id="titleId">Photographers</span>
            </div>
            <div className="rightMid">{photographerDeatils}</div>
          </div>
        </div>
      </div>
      <div className="sectionFooter">{photoPrice}</div>
    </div>
  );
}

export default Home;
