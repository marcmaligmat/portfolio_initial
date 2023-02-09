const PageHeading = ({ pageIcon, pageTitle }) => {
  return (
    <div className="page-heading">
      <span className="icon">
        <i className={pageIcon} />
      </span>
      <h2>{pageTitle}</h2>
    </div>
  );
};

const SectionContainer = ({ children, pageTitle, pageIcon, pageId, map }) => {
  return (
    <section className={`${pageId}-section pt-page  `} id={pageId}>
      <div className="section-container">
        {/*Page Heading*/}
        <PageHeading pageIcon={pageIcon} pageTitle={pageTitle} />
        {children}
      </div>
      {map && (
        <div className="google">
          <iframe
            src="https://maps.google.com/maps?q=cagayan de oro&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height={200}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </section>
  );
};
export default SectionContainer;
