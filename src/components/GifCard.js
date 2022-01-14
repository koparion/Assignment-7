import react from "react";
// import Search from './GifRegSearchField'

function GiphyCard(props) {
  const { random, search, list } = props;

  return (
    <>
      {random.map((element) => {
        return (
          <div className="container">
            <ul>
              <li key={element.id} className="card-img">
                <a href={element.url}>
                  <img
                    src={element.images.fixed_height_small.url}
                    alt="gif"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        );
      })}
      {search.map((element) => {
        return (
          <div className="container">
            <ul>
              <li key={element.id} className="card-img">
                <a href={element.url}>
                  <img
                    src={element.images.fixed_height_small.url}
                    alt="gif"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        );
      })}
      {list.map((element) => {
        return (
          <div className="container">
            <ul>
              <li key={element.id} className="card-img">
                <a href={element.url}>
                  <img
                    src={element.images.fixed_height_small.url}
                    alt="gif"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default GiphyCard;
