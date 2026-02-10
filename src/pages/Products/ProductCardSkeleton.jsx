const ProductCardSkeleton = () => {
  return (
    <div className="card" aria-hidden="true" style={{ width: "18rem" }}>
      <div
        className="card-img-top placeholder-glow"
        style={{ height: "200px" }}
      >
        <span className="placeholder col-12 h-100"></span>
      </div>

      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>

        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>

        <button
          className="btn btn-warning disabled placeholder col-6"
          tabIndex="-1"
        ></button>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
