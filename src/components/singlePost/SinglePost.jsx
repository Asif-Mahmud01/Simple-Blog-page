import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost({desc}) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
        A Deeper Dive
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="">
                Asif
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        The fact that our designer goods do not represent wealth for positive utility is 
        having more negative damage to society than we can fathom. This article is going 
        to help detail why, and detail our solution in progress. 
        As individuals, once we cover our basic needs, status becomes an intrinsic motivator
         in the rest of our actions. Status comes in many forms. The healthiest / most 
         enlightened cultures put the highest status in rewarding positive sum behavior. 
         In global culture, luxury goods like a Gucci bag/belt have become widespread as 
         top status symbols, reflecting vapid use of money as the highest form of status. 
         It has become such common Christmas list item for broke young teenagers that the 
         richest man on the planet at the time of this writing got his riches from selling 
         these overpriced goods representing nothing more than the ability to waste money. 
         <br />
         Collectively this misrepresentation of true status (service to others) is attributing 
         more damage to building a healthy positive culture than we can imagine.
        Social media, our emergent global cultural production system, could be used collectively 
        to unify humanity around bettering ourselves and others. Instead it is used to further 
        extract youth through a false form of status as a service. Imagine a world where this 
        wasteful spending was considered cancelable. One where we collectively take accountability 
        for the capability to money to the positive growth of us as a species. Imagine a 
        world where the designer things we wore showed off spending a lot of money to make a lot 
        of positive impact. If the world you imagined only went as far as to redistribute the wealth 
        of designer wear, try imagining the deeper cultural effects this new alignment would have. 
        </p>
      </div>
    </div>
  );
}