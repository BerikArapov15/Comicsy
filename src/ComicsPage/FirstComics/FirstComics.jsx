import "../FirstComics/FirstComics.css";

export default function FirstComics() {
  return (
    <div className="FirstComicsPage">
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport ol_form">
          <li id="carousel__slide1" className="carousel__slide page1 form">
            <div className="carousel__snapper"></div>
          </li>
          <li id="carousel__slide2" className="carousel__slide page2">
            <div className="carousel__snapper"></div>
          </li>
          <li id="carousel__slide3" className="carousel__slide page3">
            <div className="carousel__snapper"></div>
          </li>
          <li id="carousel__slide4" className="carousel__slide page4">
            <div className="carousel__snapper"></div>
          </li>
          <li id="carousel__slide1" className="carousel__slide page5">
            <div className="carousel__snapper"></div>
          </li>
          <li id="carousel__slide2" className="carousel__slide page6">
            <div className="carousel__snapper"></div>
          </li>
          <li id="carousel__slide3" className="carousel__slide page7">
            <div className="carousel__snapper"></div>
          </li>
          <li id="carousel__slide4" className="carousel__slide page8">
            <div className="carousel__snapper"></div>
          </li>
          <li id="carousel__slide3" className="carousel__slide page9">
            <div className="carousel__snapper"></div>
          </li>
          <li id="carousel__slide4" className="carousel__slide page10">
            <div className="carousel__snapper"></div>
          </li>
        </ol>
      </section>
    </div>
  );
}
