const CopyRight = () => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="logo">
              <img src="img/logo/logo.png" alt="" />
            </div>
            <div className="copy">
              <p>
                All Rights Reserved
                © {new Date().getFullYear()} by{" "}
                <a href="https://github.com/aslamhamza004" target="_blank">
                  RippleNexus
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
