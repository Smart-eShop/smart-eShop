
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import "../neumorphism.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'

function Login() {
    return (

<>
  <header className="header-global">
    <nav id="navbar-main" aria-label="Primary navigation" className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent navbar-theme-primary">
      <div className="container position-relative">
        <a className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4" href="./index.html">
          <img className="navbar-brand-dark" src="./assets/img/brand/dark.svg" alt="Logo light" />
          <img className="navbar-brand-light" src="./assets/img/brand/dark.svg" alt="Logo dark" />
        </a>
        <div className="navbar-collapse collapse" id="navbar_global">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="./index.html" className="navbar-brand shadow-soft py-2 px-3 rounded border border-light">
                  <img src="./assets/img/brand/dark.svg" alt="Themesberg logo" />
                </a>
              </div>
              <div className="col-6 collapse-close">
                <a href="#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation" />
              </div>
            </div>
          </div>
          <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
            <li className="nav-item dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown">
                <span className="nav-link-inner-text">Pages</span>
                <span className="fas fa-angle-down nav-link-arrow ml-2" />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="./html/pages/about.html">About</a></li>
                <li><a className="dropdown-item" href="./html/pages/pricing.html">Pricing</a></li>
                <li><a className="dropdown-item" href="./html/pages/contact.html">Contact</a></li>
                <li><a className="dropdown-item" href="./html/pages/sign-in.html">Sign in</a></li>
                <li><a className="dropdown-item" href="./html/pages/sign-up.html">Sign up</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown mega-dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown">
                <span className="nav-link-inner-text">Components</span>
                <span className="fas fa-angle-down nav-link-arrow ml-2" />
              </a>
              <div className="dropdown-menu">
                <div className="row">
                  <div className="col-lg-6 inside-bg d-none d-lg-block">
                    <div className="justify-content-center bg-primary text-white">
                      <div className="px-6 pb-5 pt-3">
                        <img src="./assets/img/megamenu-image.jpg" alt="Pixel Components" />
                      </div>
                      <div className="z-2 pb-4 text-center">
                        <a href="./html/components/all.html" className="btn btn-primary mb-2 mb-sm-0 mr-3 text-secondary">
                          <span className="mr-1"><span className="fas fa-th-large" /></span>
                          All components
                        </a>
                        <a href="https://themesberg.com/docs/neumorphism-ui/components/alerts" target="_blank" className="btn btn-primary mb-2 mb-sm-0">
                          <span className="mr-1"><span className="fas fa-book" /></span>
                          Docs v1.0
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col pl-0">
                    <ul className="list-style-none">
                      <li><a className="dropdown-item" href="./html/components/accordions.html">Accordions</a></li>
                      <li><a className="dropdown-item" href="./html/components/alerts.html">Alerts</a></li>
                      <li><a className="dropdown-item" href="./html/components/badges.html">Badges</a></li>
                      <li><a className="dropdown-item" href="./html/components/bootstrap-carousels.html">Bootstrap Carousels</a></li>
                      <li><a className="dropdown-item" href="./html/components/breadcrumbs.html">Breadcrumbs</a></li>
                      <li><a className="dropdown-item" href="./html/components/buttons.html">Buttons</a></li>
                      <li><a className="dropdown-item d-flex align-items-center justify-content-between" href="https://themesberg.com/docs/neumorphism-ui/plugins/jquery-counters/" target="_blank">Counters <span className="badge badge-dark ml-3">Pro</span></a></li>
                      <li><a className="dropdown-item" href="./html/components/cards.html">Cards</a></li>
                      <li><a className="dropdown-item d-flex align-items-center justify-content-between" href="https://themesberg.com/docs/neumorphism-ui/components/e-commerce/" target="_blank">E-commerce <span className="badge badge-dark ml-3">Pro</span></a></li>
                    </ul>
                  </div>
                  <div className="col pl-0">
                    <ul className="list-style-none">
                      <li><a className="dropdown-item" href="./html/components/forms.html">Forms</a></li>
                      <li><a className="dropdown-item d-flex align-items-center justify-content-between" href="https://themesberg.com/docs/neumorphism-ui/components/icon-boxes/" target="_blank">Icon Boxes <span className="badge badge-dark ml-3">Pro</span></a></li>
                      <li><a className="dropdown-item" href="./html/components/modals.html">Modals</a></li>
                      <li><a className="dropdown-item" href="./html/components/navs.html">Navs</a></li>
                      <li><a className="dropdown-item d-flex align-items-center justify-content-between" href="https://themesberg.com/docs/neumorphism-ui/plugins/owl-carousel/" target="_blank">Owl Carousels <span className="badge badge-dark ml-3">Pro</span></a></li>
                      <li><a className="dropdown-item" href="./html/components/pagination.html">Pagination</a></li>
                      <li><a className="dropdown-item" href="./html/components/popovers.html">Popovers</a></li>
                      <li><a className="dropdown-item" href="./html/components/progress-bars.html">Progress Bars</a></li>
                    </ul>
                  </div>
                  <div className="col pl-0">
                    <ul className="list-style-none">
                      <li><a className="dropdown-item d-flex align-items-center justify-content-between" href="https://themesberg.com/docs/neumorphism-ui/components/icon-boxes/#steps" target="_blank">Steps <span className="badge badge-dark ml-3">Pro</span></a></li>
                      <li><a className="dropdown-item" href="./html/components/tables.html">Tables</a></li>
                      <li><a className="dropdown-item" href="./html/components/tabs.html">Tabs</a> </li>
                      <li><a className="dropdown-item" href="./html/components/toasts.html">Toasts</a> </li>
                      <li><a className="dropdown-item d-flex align-items-center justify-content-between" href="https://themesberg.com/docs/neumorphism-ui/components/timelines/" target="_blank">Timelines <span className="badge badge-dark ml-3">Pro</span></a></li>
                      <li><a className="dropdown-item" href="./html/components/tooltips.html">Tooltips</a></li>
                      <li><a className="dropdown-item" href="./html/components/typography.html">Typography</a></li>
                      <li><a className="dropdown-item d-flex align-items-center justify-content-between" href="https://demo.themesberg.com/neumorphism-ui-pro/html/components/widgets.html" target="_blank">Widgets <span className="badge badge-dark ml-3">Pro</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown">
                <span className="nav-link-inner-text">Support</span>
                <span className="fas fa-angle-down nav-link-arrow ml-2" />
              </a>
              <div className="dropdown-menu dropdown-menu-lg">
                <div className="col-auto px-0" data-dropdown-content>
                  <div className="list-group list-group-flush">
                    <a href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/" target="_blank" className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                      <span className="icon icon-sm icon-secondary"><span className="fas fa-file-alt" /></span>
                      <div className="ml-4">
                        <span className="text-dark d-block">Documentation<span className="badge badge-sm badge-secondary ml-2">v1.0</span></span>
                        <span className="small">Examples and guides</span>
                      </div>
                    </a>
                    <a href="https://github.com/themesberg/th-neumorphism-ui-pro/issues" target="_blank" className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                      <span className="icon icon-sm icon-secondary"><span className="fas fa-microphone-alt" /></span>
                      <div className="ml-4">
                        <span className="text-dark d-block">Support</span>
                        <span className="small">Looking for answers? Ask us!</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <a href="https://themesberg.com/product/ui-kits/neumorphism-ui-pro" target="_blank" className="btn btn-primary text-secondary mr-3"><i className="far fa-paper-plane mr-2" /> Upgrade to PRO</a>
          <a href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/" target="_blank" className="btn btn-primary d-none d-md-inline-block"><i className="fas fa-book" /> Docs v1.0</a>
          <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    </nav>
  </header>
  <main>
    {/* Hero */}
    <section className="section section bg-soft pb-5 overflow-hidden z-2">
      <div className="container z-2">
        <div className="row justify-content-center text-center pt-6">
          <div className="col-lg-8 col-xl-8">
            <h1 className="display-2 mb-3">Neumorphism UI</h1>
            <p className="lead px-md-6 mb-5">Neumorphism inspired <strong>User Interface Kit</strong> that will help you prototype and design beautiful, creative and modern websites.</p>
            <div className="d-flex flex-column flex-wrap flex-md-row justify-content-md-center mb-5">
              <a href="https://themesberg.com/product/ui-kits/neumorphism-ui" target="_blank" className="btn btn-primary mb-3 mb-lg-0 mr-3"><i className="fas fa-cloud-download-alt mr-2" /> Download</a>
              <div className="mt-2">
                <a className="github-button" href="https://github.com/themesberg/neumorphism-ui" data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themesberg/neumorphism-ui on GitHub">Star</a>
              </div>
            </div>
            <a href="https://themesberg.com" target="_blank" className="d-flex align-items-center justify-content-center flex-column">
              <img src="./assets/img/themesberg.svg" height={25} className="mb-3" alt="Themesberg Logo" />
              <span className="text-muted font-small">A Themesberg production</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center mb-5 mb-md-0">
              <div className="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3">
                <span className="fas fa-box-open" />
              </div>
              <h2 className="h5 my-3">Over 200 components</h2>
              <p className="px-lg-4">Beatifully crafted and neumorphism inspired elements</p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            {/* Icon box */}
            <div className="icon-box text-center">
              <div className="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3">
                <span className="fas fa-pager" />
              </div>
              <h2 className="h5 my-3">10+ sections</h2>
              <p className="px-lg-4">Navigation bars, pricing cards, footers and many more sections to enhance page variety</p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            {/* Icon box */}
            <div className="icon-box text-center">
              <div className="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3">
                <span className="far fa-file-alt" />
              </div>
              <h2 className="h5 my-3">5 example pages</h2>
              <p className="px-lg-4">We took the time to create a few example pages to show you how neumorphic pages can look like</p>
            </div>
            {/* End of Icon box */}
          </div>
        </div>
      </div>
    </section>
    <div className="section  bg-primary pt-0 section-lg">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <div className="mb-5">
              <span className="h5 text-center">Default Accordion</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {/*Accordion*/}
            <div className="accordion shadow-soft rounded" id="accordionExample1">
              <div className="card card-sm card-body bg-primary border-light mb-0">
                <a href="#panel-1" data-target="#panel-1" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                  <span className="h6 mb-0 font-weight-bold">Our Company</span>
                  <span className="icon"><span className="fas fa-plus" /></span>
                </a>
                <div className="collapse" id="panel-1">
                  <div className="pt-3">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also
                      helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card card-sm card-body bg-primary border-light mb-0">
                <a href="#panel-2" data-target="#panel-2" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                  <span className="h6 mb-0 font-weight-bold">Neumorphism Components</span>
                  <span className="icon"><span className="fas fa-plus" /></span>
                </a>
                <div className="collapse" id="panel-2">
                  <div className="pt-3">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also
                      helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision. </p>
                  </div>
                </div>
              </div>
              <div className="card card-sm card-body bg-primary border-light">
                <a href="#panel-3" data-target="#panel-3" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                  <span className="h6 mb-0 font-weight-bold">Licenses</span>
                  <span className="icon"><span className="fas fa-plus" /></span>
                </a>
                <div className="collapse" id="panel-3">
                  <div className="pt-3">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also
                      helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision. </p>
                  </div>
                </div>
              </div>
            </div>
            {/*End of Accordion*/}
          </div>
        </div>
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <div className="my-5">
              <span className="h5 text-center">Accordion with icons</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {/*Accordion*/}
            <div className="accordion shadow-soft rounded">
              <div className="card card-sm card-body bg-primary border-light mb-0">
                <a href="#panel-4" data-target="#panel-4" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                  <span className="icon-title h6 mb-0 font-weight-bold"><span className="fab fa-leanpub" />Our
                    Company</span>
                  <span className="icon"><span className="fas fa-plus" /></span>
                </a>
                <div className="collapse" id="panel-4">
                  <div className="pt-3">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also
                      helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card card-sm card-body bg-primary border-light mb-0">
                <a href="#panel-5" data-target="#panel-5" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                  <span className="icon-title h6 mb-0 font-weight-bold"><span className="fas fa-box-open" />Pixel
                    Components</span>
                  <span className="icon"><span className="fas fa-plus" /></span>
                </a>
                <div className="collapse" id="panel-5">
                  <div className="pt-3">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also
                      helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision. </p>
                  </div>
                </div>
              </div>
              <div className="card card-sm card-body bg-primary border-light mb-0">
                <a href="#panel-6" data-target="#panel-6" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                  <span className="icon-title h6 mb-0 font-weight-bold"><span className="fas fa-donate" />Licenses</span>
                  <span className="icon"><span className="fas fa-plus" /></span>
                </a>
                <div className="collapse" id="panel-6">
                  <div className="pt-3">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also
                      helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision. </p>
                  </div>
                </div>
              </div>
            </div>
            {/*End of Accordion*/}
          </div>
        </div>
      </div>
    </div>
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <div className="mb-5">
              <span className="h5 text-center">Default Alerts</span>
            </div>
          </div>
        </div>
        {/* End of title*/}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="alert alert-secondary shadow-soft" role="alert">
              <span className="alert-inner--text">This is a secondary alert with <a href="#" className="alert-link">an
                  example link</a>. Give it a click if you like.</span>
            </div>
            <div className="alert alert-success shadow-soft" role="alert">
              <span className="alert-inner--text">This is a success alert with <a href="#" className="alert-link">an
                  example link</a>. Give it a click if you like.</span>
            </div>
            <div className="alert alert-info shadow-soft" role="alert">
              <span className="alert-inner--text">This is a info alert with <a href="#" className="alert-link">an
                  example link</a>. Give it a click if you like.</span>
            </div>
            <div className="alert alert-danger shadow-soft" role="alert">
              <span className="alert-inner--text">This is a danger alert with <a href="#" className="alert-link">an
                  example link</a>. Give it a click if you like.</span>
            </div>
          </div>
        </div>
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <div className="mt-6 mb-5">
              <span className="h5 text-center">Dismissible Alerts with Icons</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="alert alert-secondary alert-dismissible shadow-soft fade show" role="alert">
              <span className="alert-inner--icon"><span className="fas fa-exclamation-circle" /></span>
              <span className="alert-inner--text"><strong>Warning!</strong> Better check yourself, you're not
                looking too good.</span>
              <button type="button" className="close text-dark" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-success alert-dismissible shadow-soft fade show" role="alert">
              <span className="alert-inner--icon"><span className="far fa-thumbs-up" /></span>
              <span className="alert-inner--text"><strong>Well done!</strong> You successfully read this
                important alert message.</span>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-info alert-dismissible shadow-soft fade show" role="alert">
              <span className="alert-inner--icon"><span className="far fa-bell" /></span>
              <span className="alert-inner--text"><strong>Heads up!</strong>This alert needs your attention,
                but it's not super important.</span>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-danger alert-dismissible shadow-soft fade show" role="alert">
              <span className="alert-inner--icon"><span className="fas fa-fire" /></span>
              <span className="alert-inner--text"><strong>Oh snap!</strong> Change a few things up and try
                submitting again.</span>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
        </div>
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <div className="mt-6 mb-5">
              <span className="h5 text-center">Alerts with additional content</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="alert alert-secondary shadow-soft mb-4 mb-lg-5" role="alert">
              <span className="alert-inner--icon icon-lg"><span className="fas fa-exclamation-circle" /></span>
              <span className="alert-heading">Warning!</span>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <div className="alert alert-success shadow-soft mb-4 mb-lg-5" role="alert">
              <span className="alert-inner--icon icon-lg"><span className="far fa-thumbs-up" /></span>
              <span className="alert-heading">Well done!</span>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <div className="alert alert-info shadow-soft mb-4 mb-lg-5" role="alert">
              <span className="alert-inner--icon icon-lg"><span className="far fa-bell" /></span>
              <span className="alert-heading">Heads up!</span>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <div className="alert alert-danger shadow-soft mb-4 mb-lg-5" role="alert">
              <span className="alert-inner--icon icon-lg"><span className="fas fa-fire" /></span>
              <span className="alert-heading">Danger!</span>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    <div className="section pt-4 pb-0">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <span className="h3">Inset Shadow</span>
          </div>
        </div>
      </div>
    </div>
    {/* Section */}
    <div className="section section-lg">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <div className="mb-5">
              <span className="h5 text-center">Default Alerts</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="alert alert-success shadow-inset" role="alert">
              <span className="alert-inner--text">This is a success alert with <a href="#" className="alert-link">an
                  example link</a>. Give it a click if you like.</span>
            </div>
            <div className="alert alert-secondary shadow-inset" role="alert">
              <span className="alert-inner--text">This is a warning alert with <a href="#" className="alert-link">an
                  example link</a>. Give it a click if you like.</span>
            </div>
            <div className="alert alert-info shadow-inset" role="alert">
              <span className="alert-inner--text">This is a info alert with <a href="#" className="alert-link">an
                  example link</a>. Give it a click if you like.</span>
            </div>
            <div className="alert alert-danger shadow-inset" role="alert">
              <span className="alert-inner--text">This is a danger alert with <a href="#" className="alert-link">an
                  example link</a>. Give it a click if you like.</span>
            </div>
          </div>
        </div>
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <div className="mt-6 mb-5">
              <span className="h5 text-center">Dismissible Alerts with Icons</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="alert alert-success alert-dismissible shadow-inset fade show" role="alert">
              <span className="alert-inner--icon"><span className="far fa-thumbs-up" /></span>
              <span className="alert-inner--text"><strong>Well done!</strong> You successfully read this
                important alert message.</span>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-secondary alert-dismissible shadow-inset fade show" role="alert">
              <span className="alert-inner--icon"><span className="fas fa-exclamation-circle" /></span>
              <span className="alert-inner--text"><strong>Warning!</strong> Better check yourself, you're not
                looking too good.</span>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-info alert-dismissible shadow-inset fade show" role="alert">
              <span className="alert-inner--icon"><span className="far fa-bell" /></span>
              <span className="alert-inner--text"><strong>Heads up!</strong>This alert needs your attention,
                but it's not super important.</span>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-danger alert-dismissible shadow-inset fade show" role="alert">
              <span className="alert-inner--icon"><span className="fas fa-fire" /></span>
              <span className="alert-inner--text"><strong>Oh snap!</strong> Change a few things up and try
                submitting again.</span>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
        </div>
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <div className="mt-6 mb-5">
              <span className="h5 text-center">Alerts with additional content</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="alert alert-success shadow-inset" role="alert">
              <span className="alert-inner--icon icon-lg"><span className="far fa-thumbs-up" /></span>
              <span className="alert-heading">Well done!</span>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <div className="alert alert-secondary shadow-inset" role="alert">
              <span className="alert-inner--icon icon-lg"><span className="fas fa-exclamation-circle" /></span>
              <span className="alert-heading">Warning!</span>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <div className="alert alert-info shadow-inset" role="alert">
              <span className="alert-inner--icon icon-lg"><span className="far fa-bell" /></span>
              <span className="alert-heading">Heads up!</span>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <div className="alert alert-danger shadow-inset" role="alert">
              <span className="alert-inner--icon icon-lg"><span className="fas fa-fire" /></span>
              <span className="alert-heading">Danger!</span>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* Section */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        <div className="row mb-6">
          <div className="col-lg-6">
            <div className="mb-4">
              <span className="h6">Badges</span>
            </div>
            <span className="badge badge-dark text-uppercase">Dark</span>
            <span className="badge badge-secondary text-uppercase">Secondary</span>
            <span className="badge badge-success text-uppercase">Success</span>
            <span className="badge badge-danger text-uppercase">Danger</span>
            <span className="badge badge-info text-uppercase">Info</span>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <span className="h6">Link Badges</span>
            </div>
            <a href="#" className="badge badge-dark">Dark</a>
            <a href="#" className="badge badge-secondary">Secondary</a>
            <a href="#" className="badge badge-success">Success</a>
            <a href="#" className="badge badge-danger">Danger</a>
            <a href="#" className="badge badge-info">Info</a>
          </div>
        </div>
        <div className="row mb-6">
          <div className="col-lg-6">
            <div className="mb-4">
              <span>Notification Badges</span>
            </div>
            <button type="button" className="btn btn-primary">
              Notifications <span className="badge badge-pill badge-success">5</span>
              <span className="sr-only">unread messages</span>
            </button>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <span>Choose your size</span>
            </div>
            <span className="badge badge-success text-uppercase">Badge</span>
            <span className="badge badge-md badge-success text-uppercase">Badge md</span>
            <span className="badge badge-lg badge-success text-uppercase">Badge lg</span>
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <h2 className="h5 mb-6">Blog Cards</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row mb-5">
          <div className="col-12 col-md-6 col-lg-4 mb-5">
            <div className="card bg-primary border-light shadow-soft">
              <img src="./assets/img/blog/blog-article-1.jpg" className="card-img-top rounded-top" alt="Themesberg office" />
              <div className="card-body">
                <span className="h6 icon-tertiary small"><span className="fas fa-medal mr-2" />Awards</span>
                <h3 className="h5 card-title mt-3">We partnered up with Google</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary btn-sm">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5">
            <div className="card bg-primary border-light shadow-soft">
              <div className="card-header p-3">
                <img src="./assets/img/blog/blog-article-2.jpg" className="card-img-top rounded" alt="Designer desk" />
              </div>
              <div className="card-body pt-2">
                <div className="media d-flex align-items-center justify-content-between">
                  <div className="post-group">
                    <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="23k followers">
                      <img className="avatar-sm mr-2 img-fluid rounded-circle" src="./assets/img/team/profile-picture-2.jpg" alt="Jo portrait" /> Jo J. Moore
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="small"><span className="far fa-calendar-alt mr-2" />15 March 2020</span>
                  </div>
                </div> 
                <h3 className="h5 card-title mt-4">We partnered up with Google</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary btn-sm">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5">
            <div className="card bg-primary shadow-soft text-center border-light">
              <div className="card-header">
                <span className="card-text small"><span className="far fa-calendar-alt mr-2" />15 March 2020</span>
              </div>
              <div className="card-body">
                <h3 className="h5 card-title">We partnered up with Google</h3>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary btn-sm">Learn More</a>
              </div>
              <div className="card-footer">
                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="23k followers">
                  <img className="avatar-sm mr-2 img-fluid rounded-circle" src="./assets/img/team/profile-picture-2.jpg" alt="Moore avatar" /> Jo J. Moore
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card bg-primary shadow-inset border-light">
              <div className="card-body p-5">
                <h3 className="h4 card-title mb-3">We partnered up with Google</h3>
                <span className="card-text small"><span className="far fa-calendar-alt mr-2" />15 March 2020</span>
                <p className="card-text mt-4">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex align-items-center">
                  <a href="#" className="btn btn-primary btn-sm mr-3">Learn More</a>
                  <a href="#" className="small"><span className="far fa-comments mr-2" />21</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="section section-lg pt-0">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <h2 className="h5 mb-7">Profile Cards</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-5">
            {/* Profile Card */}
            <div className="profile-card mb-5">
              <div className="card bg-primary shadow-inset border-light text-center">
                <div className="card-header">
                  <div className="profile-image bg-primary shadow-inset border border-light rounded mx-auto p-3 mt-n6">
                    <img src="./assets/img/team/profile-picture-4.jpg" className="card-img-top rounded" alt="Leos Portrait" />
                  </div>
                </div>
                <div className="card-body pb-5">
                  <h3 className="h5 mb-2">Jose Leos</h3>
                  <span className="h6 font-weight-normal text-gray mb-3">Co-Founder</span>
                  <ul className="list-unstyled d-flex justify-content-center mt-3 mb-4">
                    <li>
                      <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                        <span className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                        <span className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                        <span className="fab fa-slack-hash" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                        <span className="fab fa-dribbble" />
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-sm btn-primary mr-3" href="#">
                    <span className="fas fa-user-plus mr-1" /> Follow
                  </a>
                  <a className="btn btn-sm btn-primary" href="#">
                    Message
                  </a>                                
                </div>
              </div>
            </div>
            {/* End of Profile Card */}
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-5">
            {/* Profile Card */}
            <div className="profile-card mb-5">
              <div className="card bg-primary shadow-soft border-light">
                <div className="profile-image bg-primary shadow-inset border border-light rounded p-3 ml-3 mt-n5">
                  <img src="./assets/img/team/profile-picture-3.jpg" className="card-img-top rounded" alt="Bonnie Avatar" />
                </div>
                <div className="card-body">
                  <h3 className="h5 mb-2">Bonnie Green</h3>
                  <span className="h6 font-weight-normal text-gray mb-3">Web Designer</span>
                  <ul className="list-unstyled d-flex my-3">
                    <li>
                      <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                        <span className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                        <span className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                        <span className="fab fa-slack-hash" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                        <span className="fab fa-dribbble" />
                      </a>
                    </li>
                  </ul>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            {/* End of Profile Card */}
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-5">
            {/* Profile Card */}
            <div className="profile-card mb-5">
              <div className="card bg-primary shadow-soft border-light">
                <div className="profile-image bg-primary shadow-inset border border-light rounded-circle p-3 ml-3 mt-n5">
                  <img src="./assets/img/team/profile-picture-1.jpg" className="card-img-top rounded-circle" alt="Christopher Avatar" />
                </div>
                <div className="card-body">
                  <h3 className="h5 mb-2">Christopher Wood</h3>
                  <span className="h6 font-weight-normal text-gray mb-3">Marketing</span>
                  <ul className="list-unstyled d-flex my-3">
                    <li>
                      <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                        <span className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                        <span className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                        <span className="fab fa-slack-hash" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                        <span className="fab fa-dribbble" />
                      </a>
                    </li>
                  </ul>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            {/* End of Profile Card */}
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-md-0">
            {/* Profile Card */}
            <div className="card bg-primary shadow-soft border-light">
              <div className="card-header p-4">
                <img src="./assets/img/team/profile-picture-4.jpg" className="card-img-top rounded" alt="Wood Portrait" />
              </div>
              <div className="card-body pt-2">
                <h3 className="h5 mb-2">Christopher Wood</h3>
                <span className="h6 font-weight-normal text-gray mb-4">Co-Founder Themesberg</span>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <ul className="list-unstyled d-flex my-3">
                  <li>
                    <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                      <span className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                      <span className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                      <span className="fab fa-slack-hash" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                      <span className="fab fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End of Profile Card */}
          </div>
        </div>
      </div>
    </section>
    <div className="section section-lg pt-0">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <h2 className="h5 mb-7">Pricing Cards</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row mb-5">
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="card bg-primary shadow-soft border-light text-center py-4">
              {/* Header */}
              <div className="card-header p-3">
                <h3 className="text-gray mb-4">Basic</h3>
                <span className="d-block">
                  <span className="display-1 font-weight-bold">
                    <span className="align-top font-medium">$</span>19
                  </span>
                  <span className="d-block text-gray font-small">/ month</span>
                </span>
              </div>
              {/* End Header */}
              {/* Content */}
              <div className="card-body">
                <ul className="list-unstyled mb-4">
                  <li className="list-item pb-3"><strong>1</strong> free domain</li>
                  <li className="list-item pb-3">Storage space: <strong>5GB</strong></li>
                  <li className="list-item pb-3"><strong>100k</strong> monthly visitors</li>
                  <li className="list-item pb-3">One-click staging site</li>
                  <li className="list-item pb-3">Search engine wizard </li>
                  <li className="list-item pb-3">Community support</li>
                </ul>
                <button type="button" className="btn btn-primary btn-block">Start
                  Starter</button>
              </div>
              {/* End Content */}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="card bg-primary shadow-soft border-light p-4">
              {/* Header */}
              <div className="card-header border-bottom text-center">
                <span className="d-block">
                  <span className="display-1 font-weight-bold">
                    <span className="align-top font-medium">$</span>19
                  </span>
                  <span className="text-gray font-small">/ month</span>
                </span>
              </div>
              {/* End Header */}
              {/* Content */}
              <div className="card-body">
                <p>Faster sites deliver better business results for your clients.</p>
                <ul className="list-unstyled mb-4">
                  <li className="list-item pb-2"><strong>Full Support</strong> No</li>
                  <li className="list-item pb-2"><strong>Storage</strong> 50 GB</li>
                  <li className="list-item"><strong>Monthly Visitors</strong> 400k</li>
                </ul>
                <button type="button" className="btn btn-primary btn-block">
                  <span className="fas fa-cart-plus mr-3" />Add to Cart
                </button>
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="card bg-primary shadow-soft border-light">
              <div className="row no-gutters align-items-center">
                <div className="col-sm-5">
                  {/* Header */}
                  <div className="card-header text-center pb-0">
                    <h3 className="mb-0">Basic</h3>
                    <span className="d-block my-3">
                      <span className="display-2 font-weight-bold"><span className="align-baseline font-medium">$</span>19
                      </span>
                    </span>
                    <button type="button" className="btn btn-sm btn-primary btn-block">Add to Cart</button>
                  </div>
                </div>
                <div className="col-sm-7">
                  {/* Content */}
                  <div className="card-body pb-0">
                    <ul className="list-group list-group-flush price-list mb-4">
                      <li className="list-group-item border-primary pb-1"><span className="fas fa-headset" />Community support</li>
                      <li className="list-group-item border-primary pb-1"><span className="far fa-hdd" />15 GB SSD storage</li>
                      <li className="list-group-item border-primary pb-1"><span className="far fa-paper-plane" />One-click staging site</li>
                      <li className="list-group-item border-primary pb-1"><span className="far fa-envelope" />10 E-mail accounts</li>
                      <li className="list-group-item border-0"><span className="fas fa-users" />Team size: 1-5 developers</li>
                    </ul>
                  </div>
                  {/* End Content */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card bg-primary shadow-inset border-light p-3">
              {/* Content */}
              <div className="card-body shadow-soft border border-light rounded p-4">
                <h4 className="mb-3">Regular</h4>
                <div className="d-flex mb-3"> 
                  <span className="h5 mb-0">$</span> 
                  <span className="price display-2 text-dark mb-0">199</span> 
                </div>
                <p className="mb-4">So, get Website Backup and stop worrying about data loss. Get back to doing what you do best – running your business and making money.</p>
                <button type="button" className="btn btn-primary btn-block rounded-bottom">Add to Cart</button>
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section-lg pt-0">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <h2 className="h5 mb-7">Call to Action Cards</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card bg-primary shadow-soft border-light mb-6">
              <div className="card-body px-5 py-5 text-center text-md-left">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h2 className="mb-3">Get in touch</h2>
                    <p className="mb-0">
                      If you need any help with our products or services, choose one of the following ways to contact us.
                    </p>
                  </div>
                  <div className="col-12 col-md-6 mt-4 mt-md-0 text-md-right">
                    <a href="#" className="btn btn-primary">
                      <span className="mr-1">
                        <span className="fas fa-headphones" />
                      </span>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <div className="card bg-primary shadow-soft border-light px-4 py-1 mb-6">
              <div className="card-body text-center text-md-left">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h2 className="mb-3">Become one of us</h2>
                    <p className="mb-4">
                      Do you want to join our team and work remotely from anywhere you'd like? We can’t wait to hear from you!
                    </p>
                    <a href="#" className="btn btn-primary">
                      <span className="mr-1">
                        <span className="fas fa-file-invoice" />
                      </span>
                      Check Careers
                    </a>
                  </div>
                  <div className="col-12 col-md-6 mt-4 mt-md-0 text-md-right">
                    <img src="./assets/img/illustrations/reading-side.svg" alt="illustration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card bg-primary shadow-soft border-light px-4 py-5 text-center mb-5">
              <div className="card-header pb-0">
                <h2 className="h1 mb-3">Ready to change your life?</h2>
              </div>
              <div className="card-body pt-2 px-0 px-lg-7">
                <p className="mb-5 lead">
                  Download Rocket today and take the first step to organize your routine, achieve your personal goals and reflect on your life.
                </p>
                <a className="btn btn-lg btn-primary mr-md-3 mb-3 mb-sm-0" href="#">
                  <div className="d-flex align-items-center">
                    <span className="icon icon-lg mr-3"><span className="fab fa-apple" /></span>
                    <div className="d-block text-left">
                      <small className="font-small">Download on the</small>
                      <div className="h5 mb-0">App Store</div>
                    </div>
                  </div>
                </a>
                <a className="btn btn-lg btn-primary" href="#">
                  <div className="d-flex align-items-center">
                    <span className="icon icon-lg mr-3"><span className="fab fa-google-play" /></span>
                    <div className="d-block text-left">
                      <small className="font-small">Download on the</small>
                      <div className="h5 mb-0">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card bg-primary shadow-soft border-light px-4 py-5">
              <div className="card-header pb-0 text-center">
                <h2 className="h1 mb-3">Get the most out of your network.</h2>
                <p className="mb-5 lead">
                  Contact management designed for teams and individuals
                </p>
              </div>
              <div className="card-body pt-2 px-0 px-lg-7">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8">
                    <div className="form-group">
                      <label className="h6 font-weight-light text-gray" htmlFor="subscribeInputEmail">Email address</label>
                      <div className="d-flex flex-row justify-content-center">
                        <div className="input-group">
                          <input className="form-control form-control-xl border-light" id="subscribeInputEmail" placeholder="example@company.com" type="email" />
                          <div className="input-group-prepend">
                            <button type="submit" className="btn btn-primary rounded-right">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section-lg pt-0">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <h2 className="h5 mb-7">Login &amp; Register</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row justify-content-md-around">
          <div className="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
            <div className="card bg-primary shadow-soft border-light p-4">
              <div className="card-header text-center pb-0">
                <h2 className="h4">Sign in to our platform</h2>
                <span>Login here using your username and password</span>   
              </div>
              <div className="card-body">
                <form action="#" className="mt-4">
                  {/* Form */}
                  <div className="form-group">
                    <label htmlFor="exampleInputIcon333">Your email</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><span className="fas fa-envelope" /></span>
                      </div>
                      <input className="form-control" id="exampleInputIcon333" placeholder="example@company.com" type="text" aria-label="email adress" />
                    </div>
                  </div>
                  {/* End of Form */}
                  <div className="form-group">
                    {/* Form */}
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword777">Password</label>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><span className="fas fa-unlock-alt" /></span>
                        </div>
                        <input className="form-control" id="exampleInputPassword777" placeholder="Password" type="password" aria-label="Password" required />
                      </div>
                    </div>
                    {/* End of Form */}
                    <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck545" />
                        <label className="form-check-label" htmlFor="defaultCheck545">
                          Remember me
                        </label>
                      </div>
                      <div><a href="#" className="small text-right">Lost password?</a></div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-block btn-primary">Sign in</button>
                </form>
                <div className="mt-3 mb-4 text-center">
                  <span className="font-weight-normal">or login with</span>
                </div>
                <div className="btn-wrapper my-4 text-center">
                  <button className="btn btn-primary btn-pill btn-icon-only text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                    <span aria-hidden="true" className="fab fa-facebook-f" />
                  </button>
                  <button className="btn btn-primary btn-pill  btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                    <span aria-hidden="true" className="fab fa-twitter" />
                  </button>
                  <button className="btn btn-primary btn-pill btn-icon-only text-facebook" type="button" aria-label="github button" title="github button">
                    <span aria-hidden="true" className="fab fa-github" />
                  </button>
                </div>
                <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                  <span className="font-weight-normal">
                    Not registered?
                    <a href="#" className="font-weight-bold">Create account</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
            <div className="card bg-primary shadow-soft border-light p-4">
              <div className="card-header text-center pb-0">
                <h2 className="mb-0 h5">Create Account</h2>                               
              </div>
              <div className="card-body">
                <form action="#">
                  {/* Form */}
                  <div className="form-group">
                    <label htmlFor="exampleInputIcon999">Your email</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><span className="fas fa-envelope" /></span>
                      </div>
                      <input className="form-control" id="exampleInputIcon999" placeholder="example@company.com" type="text" aria-label="email adress" />
                    </div>
                  </div>
                  {/* End of Form */}
                  <div className="form-group">
                    {/* Form */}
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword345">Password</label>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><span className="fas fa-unlock-alt" /></span>
                        </div>
                        <input className="form-control" id="exampleInputPassword345" placeholder="Password" type="password" aria-label="Password" required />
                      </div>
                    </div>
                    {/* End of Form */}
                    {/* Form */}
                    <div className="form-group">
                      <label htmlFor="exampleConfirmPassword712">Confirm Password</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><span className="fas fa-unlock-alt" /></span>
                        </div>
                        <input className="form-control" id="exampleConfirmPassword712" placeholder="Confirm password" type="password" aria-label="Password" required />
                      </div>
                    </div>
                    {/* End of Form */}
                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck634" />
                      <label className="form-check-label" htmlFor="defaultCheck634">
                        I agree to the <a href="#">terms and conditions</a>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-block btn-primary">Sign in</button>
                </form>
                <div className="mt-3 mb-4 text-center">
                  <span className="font-weight-normal">or</span>
                </div>
                <div className="btn-wrapper my-4 text-center">
                  <button className="btn btn-primary btn-pill btn-icon-only text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                    <span aria-hidden="true" className="fab fa-facebook-f" />
                  </button>
                  <button className="btn btn-primary btn-pill  btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                    <span aria-hidden="true" className="fab fa-twitter" />
                  </button>
                  <button className="btn btn-primary btn-pill btn-icon-only text-facebook" type="button" aria-label="github button" title="github button">
                    <span aria-hidden="true" className="fab fa-github" />
                  </button>
                </div>
                <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                  <span className="font-weight-normal">
                    Already have an account?
                    <a href="#" className="font-weight-bold">Login here</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Section */}
    <section className="section bg-primary pt-0 section-lg">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <h2 className="h5 text-center mb-6">Basic Carousels</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row justify-content-center">
          <div className="col-md-10">
            {/* Carousel */}
            <div id="Carousel1" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
              <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <img src="./assets/img/carousel/image-1.jpg" className="d-block w-100" alt="slide1" />
                </div>
                <div className="carousel-item">
                  <img src="./assets/img/carousel/image-2.jpg" className="d-block w-100" alt="slide2" />
                </div>
                <div className="carousel-item">
                  <img src="./assets/img/carousel/image-3.jpg" className="d-block w-100" alt="slide3" />
                </div>
              </div>
            </div>
            {/* End of Carousel */}
          </div>
        </div>
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <h2 className="h5 text-center mt-5 mb-6">With Controls</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row justify-content-center">
          <div className="col-md-10">
            {/* Carousel */}
            <div id="Carousel2" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
              <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./assets/img/carousel/image-1.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./assets/img/carousel/image-2.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./assets/img/carousel/image-3.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#Carousel2" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#Carousel2" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* End of Carousel */}
          </div>
        </div>
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <h2 className="h5 text-center mt-6 mb-5">Indicators &amp; controls</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row justify-content-center">
          <div className="col-md-10">
            {/* Carousel */}
            <div id="Carousel3" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#Carousel3" data-slide-to={0} className="active" />
                <li data-target="#Carousel3" data-slide-to={1} />
                <li data-target="#Carousel3" data-slide-to={2} />
              </ol>
              <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./assets/img/carousel/image-1.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./assets/img/carousel/image-2.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./assets/img/carousel/image-3.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#Carousel3" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#Carousel3" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* End of Carousel */}
          </div>
        </div>
        {/* Title */}
        <div className="row">
          <div className="col text-center">
            <h2 className="h5 text-center mt-6 mb-5">With captions</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row justify-content-center">
          <div className="col-md-10">
            {/* Carousel */}
            <div id="Carousel4" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#Carousel4" data-slide-to={0} className="active" />
                <li data-target="#Carousel4" data-slide-to={1} />
                <li data-target="#Carousel4" data-slide-to={2} />
              </ol>
              <div className="carousel-inner rounded">
                <div className="carousel-item overlay-primary active">
                  <img className="d-block w-100" src="./assets/img/carousel/image-2.jpg" alt="First slide" />
                  <div className="carousel-caption d-none d-md-block text-dark">
                    <h3 className="h5">First Title</h3>
                    <p>Start your development with a Pixel Design System for Bootstrap 4. It is creative and it features many components that can help you create amazing websites.
                    </p>
                  </div>
                </div>
                <div className="carousel-item overlay-primary">
                  <img className="d-block w-100" src="./assets/img/carousel/image-3.jpg" alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block text-dark">
                    <h3 className="h5">Second Title</h3>
                    <p>Start your development with a Pixel Design System for Bootstrap 4. It is creative and it features many components that can help you create amazing websites.
                    </p>
                  </div>
                </div>
                <div className="carousel-item overlay-primary">
                  <img className="d-block w-100" src="./assets/img/carousel/image-1.jpg" alt="Third slide" />
                  <div className="carousel-caption d-none d-md-block text-dark">
                    <h3 className="h5">Third Title</h3>
                    <p>Start your development with a Pixel Design System for Bootstrap 4. It is creative and it features many components that can help you create amazing websites.
                    </p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#Carousel4" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#Carousel4" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* End of Carousel */}
          </div>
        </div>
      </div>
    </section>
    {/* End of Section */}
    {/* Section */}
    <section className="section bg-primary pt-0 section-lg">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col">
            <h2 className="h5 mb-6">Inset Shadow</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row">
          <div className="col-12">
            {/*Breadcrumb*/}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-gray">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            {/*End of Breadcrumb*/}
            {/*Breadcrumb*/}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-dark">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            {/*End of Breadcrumb*/}
            {/*Breadcrumb*/}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-success ">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            {/*End of Breadcrumb*/}
            {/*Breadcrumb*/}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-info">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            {/*End of Breadcrumb*/}
            {/*Breadcrumb*/}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-danger">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            {/*End of Breadcrumb*/}
          </div>
        </div>
        {/* Title */}
        <div className="row">
          <div className="col">
            <h2 className="h5 mt-6 mb-5">Transparent background</h2>
          </div>
        </div>
        {/* End of title*/}
        <div className="row">
          <div className="col-12">
            {/*Breadcrumb*/}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-gray breadcrumb-transparent">
                <li className="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>
            {/*End of Breadcrumb*/}
            {/*Breadcrumb*/}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-gray breadcrumb-transparent">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            {/*End of Breadcrumb*/}
            {/*Breadcrumb*/}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-gray breadcrumb-transparent">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            {/*End of Breadcrumb*/}
          </div>
        </div>
      </div>
    </section>
    {/* End of Section */}
    <div className="section section-lg bg-primary pt-0 components-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="mb-3">
              <h2 className="h5">Main Buttons</h2>
            </div>
            {/*Buttons*/}
            <button className="btn btn-primary" type="button">Button</button>
            <button className="btn btn-primary" type="button">
              <span className="mr-1"><span className="fas fa-book-open" /></span>
              Icon Left
            </button>
            <button className="btn btn-primary" type="button">
              Icon Right
              <span className="ml-1"><span className="fas fa-book-open" /></span>
            </button>
            <button className="btn btn-icon-only btn-primary" type="button" aria-label="love button" title="love button">
              <span aria-hidden="true" className="far fa-heart" />
            </button>
            {/*End of Buttons*/}
            <div className="mb-3 mt-5">
              <h3 className="h5">Round Main Buttons</h3>
            </div>
            {/*Buttons*/}
            <button className="btn btn-pill btn-primary" type="button">Button</button>
            <button className="btn btn-pill btn-primary" type="button">
              <span className="mr-1"><span className="fas fa-cog" /></span>
              Icon Left
            </button>
            <button className="btn btn-pill btn-primary" type="button">
              Icon Right
              <span className="ml-1"><span className="fas fa-cog" /></span>
            </button>
            <button className="btn btn-icon-only btn-pill btn-primary" type="button" aria-label="up button" title="up button">
              <span aria-hidden="true" className="far fa-thumbs-up" />
            </button>
            <div className="mb-3 mt-5">
              <h3 className="h5">Animated Buttons</h3>
            </div>
            <button className="btn btn-primary animate-up-2" type="button">Animate up</button>
            <button className="btn btn-primary animate-right-3" type="button">Animate right</button>
            <button className="btn btn-primary animate-down-2" type="button">Animate down</button>
            <button className="btn btn-primary animate-left-3" type="button">Animate left</button>
            <div className="mb-3 mt-5">
              <h3 className="h5">Loading Buttons</h3>
            </div>
            {/*Buttons*/}
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              <span className="sr-only">Loading...</span>
            </button>
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              <span className="ml-1">Loading...</span>
            </button>
            <button className="btn btn-secondary" type="button" disabled>
              <span className="ml-1">Loading...</span>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            </button>
            {/*End of Buttons*/}
            <div className="mb-3 mt-5">
              <h3 className="h5 font-weight-bold mb-3">Dropdown buttons</h3>
              <div className="dropdown">
                <div className="btn-group mr-2 mb-2">
                  <button type="button" className="btn btn-primary">Primary</button>
                  <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-angle-down dropdown-arrow" />
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="btn-group mb-2 mr-2">
                  <button type="button" className="btn btn-tertiary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-angle-down dropdown-arrow" />
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
              </div>
              <div className="mb-3 mt-5">
                <h3 className="h5">Link Buttons</h3>
              </div>
              {/*Buttons*/}
              <a href="#" className="text-dark font-weight-bold mr-3">Primary</a>
              <a href="#" className="text-dark font-weight-bold mr-3">
                <span className="mr-1"><span className="fas fa-link" /></span>
                Icon Left
              </a>
              <a href="#" className="text-dark font-weight-bold">
                Icon Right
                <span className="ml-1"><span className="fas fa-link" /></span>
              </a>
              {/*End of Buttons*/}
              <div className="mb-3 mt-5">
                <h3 className="h5">Sizes</h3>
              </div>
              {/*Buttons*/}
              <button className="btn btn-sm btn-primary" type="button">Small</button>
              <button className="btn btn-primary" type="button">Regular</button>
              <button className="btn btn-lg btn-primary" type="button">Large Button</button>
              {/*End of Buttons*/}
              {/* Button colors */}
              <div className="mb-4 mt-5">
                <h3 className="h5">Choose your color</h3>
              </div>
              {/*Buttons*/}
              <button className="btn btn-primary text-dark" type="button">Secondary</button>
              <button className="btn btn-primary text-secondary" type="button">Secondary</button>
              <button className="btn btn-primary text-info" type="button">Info</button>
              <button className="btn btn-primary text-success" type="button">Success</button>
              <button className="btn btn-primary text-danger" type="button">Danger</button>
              <button className="btn btn-primary text-dark" type="button">Dark</button>
              <button className="btn btn-primary text-gray" type="button">Gray</button>
              {/* Button links */}
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">Links</small>
              </div>
              {/*Buttons*/}
              <a href="#" className="text-default mr-3">Default</a>
              <a href="#" className="text-secondary mr-3">Secondary</a>
              <a href="#" className="text-tertiary mr-3">Tertiary</a>
              <a href="#" className="text-info mr-3">Info</a>
              <a href="#" className="text-success mr-3">Success</a>
              <a href="#" className="text-danger mr-3">Danger</a>
              <a href="#" className="text-dark mr-3">Dark</a>
              <a href="#" className="text-gray">Gray</a>
              {/*End Of Buttons*/}
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/* Button Social */}
                <div className="mb-4 mt-5">
                  <h3 className="h5 font-weight-bold">Social Buttons</h3>
                </div>
                <button className="btn btn-facebook" type="button">
                  <span className="mr-1"><span className="fab fa-facebook-f" /></span>
                  Login with Facebook
                </button>
                <br />
                <button className="btn btn-pinterest" type="button">
                  <span className="mr-1"><span className="fab fa-pinterest-p" /></span>
                  Share on Pinterest
                </button>
                <br />
                <button className="btn btn-github" type="button">
                  <span className="mr-1"><span className="fab fa-github-alt" /></span>
                  Login with GitHub
                </button>
                <br />
                <button className="btn btn-twitch" type="button">
                  <span className="mr-1"><span className="fab fa-twitch" /></span>
                  Subscribe Now
                </button>
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Button Social */}
                <div className="mb-4 mt-5">
                  <h3 className="h5 font-weight-bold">Round Social Buttons</h3>
                </div>
                <button className="btn btn-pill btn-facebook" type="button">
                  <span className="mr-1"><span className="fab fa-facebook-f" /></span>
                  Login with Facebook
                </button>
                <br />
                <button className="btn btn-pill btn-pinterest" type="button">
                  <span className="mr-1"><span className="fab fa-pinterest-p" /></span>
                  Share on Pinterest
                </button>
                <br />
                <button className="btn btn-pill btn-github" type="button">
                  <span className="mr-1"><span className="fab fa-github-alt" /></span>
                  Login with GitHub
                </button>
                <br />
                <button className="btn btn-pill btn-twitch" type="button">
                  <span className="mr-1"><span className="fab fa-twitch" /></span>
                  Subscribe Now
                </button>
              </div>
              <div className="col-lg-1 col-md-3">
                {/* Square */}
                <div className="mb-4 mt-5">
                  <h3 className="h5">Square</h3>
                </div>
                <button className="btn btn-icon-only btn-facebook" type="button" aria-label="facebook button" title="facebook button">
                  <span aria-hidden="true" className="fab fa-facebook" />
                </button>
                <button className="btn btn-icon-only btn-pinterest" type="button" aria-label="pinterest button" title="pinterest button">
                  <span aria-hidden="true" className="fab fa-pinterest-p" />
                </button>
                <button className="btn btn-icon-only btn-youtube" type="button" aria-label="youtube button" title="youtube button">
                  <span aria-hidden="true" className="fab fa-youtube" />
                </button>
                <button className="btn btn-icon-only btn-github" type="button" aria-label="github button" title="github button">
                  <span aria-hidden="true" className="fab fa-github-alt" />
                </button>
                <button className="btn btn-icon-only btn-twitch" type="button" aria-label="twitch button" title="twitch button">
                  <span aria-hidden="true" className="fab fa-twitch" />
                </button>
                <button className="btn btn-icon-only btn-paypal" type="button" aria-label="paypal button" title="paypal button">
                  <span aria-hidden="true" className="fab fa-paypal" />
                </button>
                <button className="btn btn-icon-only btn-behance" type="button" aria-label="behance button" title="behance button">
                  <span aria-hidden="true" className="fab fa-behance" />
                </button>
              </div>
              <div className="col-lg-1 col-md-2">
                {/* Circle */}
                <div className="mb-4 mt-5">
                  <h3 className="h5">Circle</h3>
                </div>
                <button className="btn btn-icon-only btn-pill btn-facebook" type="button" aria-label="facebook button" title="facebook button">
                  <span aria-hidden="true" className="fab fa-facebook" />
                </button>
                <button className="btn btn-icon-only btn-pill btn-pinterest" type="button" aria-label="pinterest button" title="pinterest button">
                  <span aria-hidden="true" className="fab fa-pinterest-p" />
                </button>
                <button className="btn btn-icon-only btn-pill btn-youtube" type="button" aria-label="youtube button" title="youtube button">
                  <span aria-hidden="true" className="fab fa-youtube" />
                </button>
                <button className="btn btn-icon-only btn-pill btn-github" type="button" aria-label="github button" title="github button">
                  <span aria-hidden="true" className="fab fa-github-alt" />
                </button>
                <button className="btn btn-icon-only btn-pill btn-twitch" type="button" aria-label="twitch button" title="twitch button">
                  <span aria-hidden="true" className="fab fa-twitch" />
                </button>
                <button className="btn btn-icon-only btn-pill btn-paypal" type="button" aria-label="paypal button" title="paypal button">
                  <span aria-hidden="true" className="fab fa-paypal" />
                </button>
                <button className="btn btn-icon-only btn-pill btn-behance" type="button" aria-label="behance button" title="behance button">
                  <span aria-hidden="true" className="fab fa-behance" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section-lg bg-primary pt-0 pb-0">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col">
            <h2 className="h5">Default Forms</h2>
          </div>
        </div>
        {/* End of Title */}
      </div>
    </div>
    {/* Section */}
    <div className="section section-lg pt-4">
      <div className="container">
        <div className="row mb-4 mb-lg-5">
          <div className="col-lg-4 col-sm-6">
            {/* Form */}
            <div className="form-group mb-4">
              <label htmlFor="exampleInputEmail67">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail67" aria-describedby="emailHelp" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            {/* End of Form */}
            {/* Form */}
            <div className="form-group">
              <label htmlFor="exampleInputIcon1">Icon Left</label>
              <div className="input-group mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text"><span className="fas fa-search" /></span>
                </div>
                <input className="form-control" id="exampleInputIcon1" placeholder="Icon Left" type="text" aria-label="Input with icon left" />
              </div>
            </div>
            {/* End of Form */}
            {/* Form */}
            <div className="form-group">
              <label htmlFor="exampleInputIcon2">Icon Right</label>
              <div className="input-group mb-4">
                <input className="form-control" id="exampleInputIcon2" placeholder="Icon Right" aria-label="Input group" type="text" />
                <div className="input-group-append">
                  <span className="input-group-text"><span className="fas fa-search" /></span>
                </div>
              </div>
            </div>
            {/* End of Form */}
            {/* Form */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <div className="input-group mb-4">
                <input className="form-control" id="exampleInputPassword1" placeholder="Password" type="password" aria-label="Password" />
                <div className="input-group-append">
                  <span className="input-group-text"><span className="fas fa-unlock-alt" /></span>
                </div>
              </div>
            </div>
            {/* End of Form */}
          </div>
          <div className="col-lg-4 col-sm-6">
            {/* Form */}
            <fieldset disabled>
              <legend className="h6">Disabled Inputs</legend>
              <div className="form-group">
                <label htmlFor="disabledTextInput">Name</label>
                <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" />
              </div>
              <div className="form-group">
                <label htmlFor="disabledSelect">Disabled select menu</label>
                <select id="disabledSelect" className="form-control">
                  <option>Disabled select</option>
                </select>
              </div>
            </fieldset>
            {/* End of Form */}
            {/* Form */}
            <div className="form-group">
              <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Country</label>
              <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>Choose...</option>
                <option value={1}>United States</option>
                <option value={2}>Germany</option>
                <option value={3}>Canada</option>
              </select>
            </div>
            {/* End of Form */}
            {/* Form */}
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control" placeholder="Enter your message..." id="exampleFormControlTextarea1" rows={4} defaultValue={""} />
            </div>
            {/* End of Form */}
          </div>
          <div className="col-lg-4 col-sm-6">
            {/* Form */}
            <div className="form-group">
              <label htmlFor="validationServer01">First name</label>
              <input type="text" className="form-control is-valid" id="validationServer01" defaultValue="Mark" required />
              <div className="valid-feedback">
                Looks good!
              </div>                
            </div>
            {/* End of Form */}
            {/* Form */}
            <div className="form-group mb-4">
              <label htmlFor="validationServerUsername">Username</label>
              <input type="text" className="form-control is-invalid" id="validationServerUsername" required />
              <div className="invalid-feedback">
                Please choose a username.
              </div>               
            </div>
            {/* End of Form */}
            {/* Form */}
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" aria-label="File upload" />
              <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
            {/* End of Form */}
          </div>
        </div>
        <h3 className="h5">Range Sliders</h3>
        <div className="row mb-4 mb-lg-5">
          <div className="col-lg-6 col-sm-6">
            {/* Simple slider */}
            <div className="input-slider-container">
              <div id="input-slider-forms" className="input-slider" data-range-value-min={100} data-range-value-max={500} />
              {/* Input slider values */}
              <div className="row mt-3 d-none">
                <div className="col-6">
                  <span className="range-slider-value" data-range-value-low={200} />
                </div>
              </div>
            </div>
            {/* End of Slider */}
          </div>
          {/* Range slider */}
          <div className="col-lg-6 col-sm-6">
            {/* Range slider container */}
            <div id="input-slider-range" data-range-value-min={100} data-range-value-max={500} />
            {/* Range slider values */}
            <div className="row d-none">
              <div className="col-6">
                <span className="range-slider-value value-low" data-range-value-low={200} id="input-slider-range-value-low" />
              </div>
              <div className="col-6 text-right">
                <span className="range-slider-value value-high" data-range-value-high={400} id="input-slider-range-value-high" />
              </div>
            </div>
            {/* End of range slider values */}
          </div>
        </div>
        <div className="row mb-4 mb-lg-5">
          <div className="col-3 col-lg-2">
            {/* Range slider container */}
            <div id="input-slider-vertical-1" data-range-value-min={100} data-range-value-max={500} />
            {/* Range slider values */}
            <div className="row d-none">
              <div className="col-6">
                <span className="range-slider-value value-low" data-range-value-low={200} id="input-slider-range-value-low-3" />
              </div>
              <div className="col-6 text-right">
                <span className="range-slider-value value-high" data-range-value-high={400} id="input-slider-range-value-high-3" />
              </div>
            </div>
            {/* End of range slider values */}
          </div>
          <div className="col-3 col-lg-2">
            {/* Range slider container */}
            <div id="input-slider-vertical-2" data-range-value-min={100} data-range-value-max={500} />
            {/* Range slider values */}
            <div className="row d-none">
              <div className="col-6">
                <span className="range-slider-value value-low" data-range-value-low={200} id="input-slider-range-value-low-4" />
              </div>
              <div className="col-6 text-right">
                <span className="range-slider-value value-high" data-range-value-high={400} id="input-slider-range-value-high-4" />
              </div>
            </div>
            {/* End of range slider values */}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-3 col-md-6">
            {/* Checkboxes */}
            <div className="mb-3">
              <span className="h6 font-weight-bold">Checkboxes Square</span>
            </div>
            <div className="form-check square-check">
              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck111" defaultChecked />
              <label className="form-check-label" htmlFor="defaultCheck111">
                Active checkbox
              </label>
            </div>
            <div className="form-check square-check">
              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck222" />
              <label className="form-check-label" htmlFor="defaultCheck222">
                Option 1 
              </label>
            </div>
            <div className="form-check square-check">
              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck333" />
              <label className="form-check-label" htmlFor="defaultCheck333">
                Option 2 
              </label>
            </div>
            <div className="form-check square-check">
              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck444" disabled />
              <label className="form-check-label" htmlFor="defaultCheck444">
                Disabled checkbox
              </label>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Checkboxes */}
            <div className="mb-3">
              <span className="h6 font-weight-bold">Checkboxes Round</span>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck555" defaultChecked />
              <label className="form-check-label" htmlFor="defaultCheck555">
                Active checkbox
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck666" />
              <label className="form-check-label" htmlFor="defaultCheck666">
                Option 1 
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck777" />
              <label className="form-check-label" htmlFor="defaultCheck777">
                Option 2 
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck888" disabled />
              <label className="form-check-label" htmlFor="defaultCheck888">
                Disabled checkbox
              </label>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
            {/* Radio */}
            <fieldset>
              <legend className="h6">Radios</legend>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Default radio
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Second default radio
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" disabled />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  Disabled radio
                </label>
              </div>
              {/* End of Radio */}
            </fieldset>
          </div>
          <div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
            <div className="mb-3">
              <span className="h6 font-weight-bold">Switches</span>
            </div>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
            </div>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" disabled id="customSwitch2" />
              <label className="custom-control-label" htmlFor="customSwitch2">Disabled switch element</label>
            </div>
          </div>
        </div>
        <div className="row mb-4 mb-lg-5">
          <div className="col-12 col-md-4">
            {/* Form */}
            <div className="form-group">
              <label className="h6" htmlFor="exampleInputDate1">Choose a date</label>
              <div className="input-group mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text"><span className="far fa-calendar-alt" /></span>
                </div>
                <input className="form-control datepicker" id="exampleInputDate1" placeholder="Select date" type="text" aria-label="Date with icon left" />
              </div>
            </div>
            {/* End of Form */}
          </div>
          <div className="col-12 col-md-8">
            {/* Form */}
            <div className="input-daterange datepicker row align-items-center">
              <div className="col">
                <label className="h6" htmlFor="exampleInputDate2">From</label>
                <div className="form-group">
                  <div className="input-group input-group-border">
                    <div className="input-group-prepend"><span className="input-group-text"><span className="far fa-calendar-alt" /></span></div>
                    <input className="form-control datepicker" id="exampleInputDate2" placeholder="Start date" type="text" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label className="h6" htmlFor="exampleInputDate3">To</label>
                  <div className="input-group input-group-border">
                    <div className="input-group-prepend"><span className="input-group-text"><span className="far fa-calendar-alt" /></span></div>
                    <input className="form-control datepicker" id="exampleInputDate3" placeholder="End date" type="text" />
                  </div>
                </div>
              </div>
            </div>
            {/* End of Form */}
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* Section */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            {/* Button Modal */}
            <button type="button" className="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-default">Default</button>
            {/* Modal Content */}
            <div className="modal fade" id="modal-default" tabIndex={-1} role="dialog" aria-labelledby="modal-default" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="h6 modal-title mb-0" id="modal-title-default">Terms of Service</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
                    <p>The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                      soon as possible of high-risk data breaches that could personally affect them.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-sm btn-primary">I Got It</button>
                    <button type="button" className="btn btn-primary text-danger ml-auto" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Modal Content */}
          </div>
          <div className="col-md-4">
            {/* Button Modal */}
            <button type="button" className="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-notification">Notification</button>
            {/* Modal Content */}
            <div className="modal fade" id="modal-notification" tabIndex={-1} role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-primary">
                  <div className="modal-header">
                    <p className="modal-title" id="modal-title-notification">A new experience, personalized for you.</p>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="py-3 text-center">
                      <span className="modal-icon display-1-lg"><span className="far fa-envelope-open" /></span>
                      <h2 className="h4 my-3">Important message!</h2>
                      <p>Do you know that you can assign status and relation to a company right in the visit list?.</p>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-sm btn-primary">Go to Inbox</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Modal Content */}
          </div>
          <div className="col-md-4">
            {/* Button Modal */}
            <button type="button" className="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-form">Sign
              In</button>
            {/* Modal Content */}
            <div className="modal fade" id="modal-form" tabIndex={-1} role="dialog" aria-labelledby="modal-form" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body p-0">
                    <div className="card bg-primary shadow-soft border-light p-4">
                      <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <div className="card-header text-center pb-0">
                        <h2 className="h4">Sign in to our platform</h2>
                        <span>Login here using your username and password</span>   
                      </div>
                      <div className="card-body">
                        <form action="#" className="mt-4">
                          {/* Form */}
                          <div className="form-group">
                            <label htmlFor="exampleInputIcon3">Your email</label>
                            <div className="input-group mb-4">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><span className="fas fa-envelope" /></span>
                              </div>
                              <input className="form-control" id="exampleInputIcon3" placeholder="example@company.com" type="text" aria-label="email adress" />
                            </div>
                          </div>
                          {/* End of Form */}
                          <div className="form-group">
                            {/* Form */}
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword6">Password</label>
                              <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"><span className="fas fa-unlock-alt" /></span>
                                </div>
                                <input className="form-control" id="exampleInputPassword6" placeholder="Password" type="password" aria-label="Password" required />
                              </div>
                            </div>
                            {/* End of Form */}
                            <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
                              <div className="form-check mb-2 mb-sm-0">
                                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck5" />
                                <label className="form-check-label" htmlFor="defaultCheck5">
                                  Remember me
                                </label>
                              </div>
                              <div><a href="#" className="small text-right">Lost password?</a></div>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-block btn-primary">Sign in</button>
                        </form>
                        <div className="mt-3 mb-4 text-center">
                          <span className="font-weight-normal">or login with</span>
                        </div>
                        <div className="btn-wrapper my-4 text-center">
                          <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                            <span aria-hidden="true" className="fab fa-facebook-f" />
                          </button>
                          <button className="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                            <span aria-hidden="true" className="fab fa-twitter" />
                          </button>
                          <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook" type="button" aria-label="github button" title="github button">
                            <span aria-hidden="true" className="fab fa-github" />
                          </button>
                        </div>
                        <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                          <span className="font-weight-normal">
                            Not registered?
                            <a href="#" className="font-weight-bold">Create account</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Modal Content */}
          </div>
          <div className="col-md-4">
            {/* Button Modal */}
            <button type="button" className="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-form-signup">Sign
              Up</button>
            {/* Modal Content */}
            <div className="modal fade" id="modal-form-signup" tabIndex={-1} role="dialog" aria-labelledby="modal-form-signup" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body p-0">
                    <div className="card bg-primary shadow-soft border-light p-4">
                      <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <div className="card-header text-center pb-0">
                        <h2 className="mb-0 h5">Create Account</h2>                               
                      </div>
                      <div className="card-body">
                        <form action="#">
                          {/* Form */}
                          <div className="form-group">
                            <label htmlFor="exampleInputIcon4">Your email</label>
                            <div className="input-group mb-4">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><span className="fas fa-envelope" /></span>
                              </div>
                              <input className="form-control" id="exampleInputIcon4" placeholder="example@company.com" type="text" aria-label="email adress" />
                            </div>
                          </div>
                          {/* End of Form */}
                          <div className="form-group">
                            {/* Form */}
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword7">Password</label>
                              <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"><span className="fas fa-unlock-alt" /></span>
                                </div>
                                <input className="form-control" id="exampleInputPassword7" placeholder="Password" type="password" aria-label="Password" required />
                              </div>
                            </div>
                            {/* End of Form */}
                            {/* Form */}
                            <div className="form-group">
                              <label htmlFor="exampleConfirmPassword7">Confirm Password</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"><span className="fas fa-unlock-alt" /></span>
                                </div>
                                <input className="form-control" id="exampleConfirmPassword7" placeholder="Confirm password" type="password" aria-label="Password" required />
                              </div>
                            </div>
                            {/* End of Form */}
                            <div className="form-check mb-4">
                              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck6" />
                              <label className="form-check-label" htmlFor="defaultCheck6">
                                I agree to the <a href="#">terms and conditions</a>
                              </label>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-block btn-primary">Sign in</button>
                        </form>
                        <div className="mt-3 mb-4 text-center">
                          <span className="font-weight-normal">or</span>
                        </div>
                        <div className="btn-wrapper my-4 text-center">
                          <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                            <span aria-hidden="true" className="fab fa-facebook-f" />
                          </button>
                          <button className="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                            <span aria-hidden="true" className="fab fa-twitter" />
                          </button>
                          <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook" type="button" aria-label="github button" title="github button">
                            <span aria-hidden="true" className="fab fa-github" />
                          </button>
                        </div>
                        <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                          <span className="font-weight-normal">
                            Already have an account?
                            <a href="#" className="font-weight-bold">Login here</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Modal Content */}
          </div>
          <div className="col-md-4">
            {/* Button Modal */}
            <button type="button" className="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-achievement">Achievement</button>
            {/* Modal Content */}
            <div className="modal fade" id="modal-achievement" tabIndex={-1} role="dialog" aria-labelledby="modal-achievement" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content shadow-soft">
                  <div className="modal-header mx-auto">
                    <span className="lead mb-0">You just unlocked a new badge</span>
                    <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="py-3 text-center">
                      <span className="modal-icon icon icon-dark display-1-lg"><span className="fas fa-medal" /></span>
                      <h2 className="h4 modal-title my-2">Author Level 5</h2>
                      <p>One Thousand Dollars! Well done - heads are turning your way.</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-sm btn-primary">All badges</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Modal Content */}
          </div>
          <div className="col-md-4">
            {/* Button Modal */}
            <button type="button" className="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-subscribe">Subscribe</button>
            {/* Modal Content */}
            <div className="modal fade" id="modal-subscribe" tabIndex={-1} role="dialog" aria-labelledby="modal-subscribe" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content shadow-soft">
                  <div className="modal-header">
                    <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body px-6">
                    <div className="py-3">
                      <div className="text-center">
                        <span className="modal-icon icon icon-lg display-1-lg"><span className="fas fa-envelope-open-text" /></span>
                        <h2 className="h4 modal-title my-2">Join our 1,360,462 subscribers</h2>
                        <p className="mb-4">Get exclusive access to freebies, premium products and news.</p>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail6">Email address</label>
                        <div className="d-sm-flex flex-column flex-sm-row mb-3 justify-content-center">
                          <input type="text" id="exampleInputEmail6" placeholder="Enter your email adress here" className="mr-sm-1 mb-2 mb-sm-0 form-control form-control-lg" />
                          <button type="submit" className="ml-sm-1 btn btn-primary">Subscribe</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer z-2 mx-auto text-center">
                    <p className="text-gray">
                      We’ll never share your details with third parties.
                      <br className="visible-md" />View our <a href="#">Privacy Policy</a> for more info.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Modal Content */}
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* Section */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-md-4">
            <span className="h5">Example</span>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-10">
            {/* Nav Wrapper */}
            <div className="nav-wrapper position-relative">
              <ul className="nav nav-pills nav-fill flex-column flex-sm-row">
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0 active" data-toggle="tab" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#">Settings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#">Messages</a>
                </li>
              </ul>
            </div>
            {/* End of Nav Wrapper */}
          </div>
        </div>
        {/* Title */}
        <div className="row mt-5 mb-4">
          <div className="col-md-4">
            <span className="h5">Round Pill</span>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-10">
            {/* Nav Wrapper */}
            <div className="nav-wrapper position-relative">
              <ul className="nav nav-pills rounded nav-fill flex-column flex-md-row">
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0 active" data-toggle="tab" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#">Settings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#">Messages</a>
                </li>
              </ul>
            </div>
            {/* End of Nav Wrapper */}
          </div>
        </div>
        {/* Title */}
        <div className="row mt-5 mb-4">
          <div className="col-md-4">
            <span className="h5">Pills with Icons</span>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-10">
            {/* Nav Wrapper */}
            <div className="nav-wrapper position-relative">
              <ul className="nav nav-pills nav-fill flex-column flex-md-row">
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0 active" data-toggle="tab" href="#"><span className="fas fa-tachometer-alt mr-2" />Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#"><span className="far fa-user-circle mr-2" />Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#"><span className="far fa-sun mr-2" />Settings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#"><span className="far fa-comments mr-2" />Messages</a>
                </li>
              </ul>
            </div>
            {/* End of Nav Wrapper */}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-10">
            {/* Nav Wrapper */}
            <div className="nav-wrapper position-relative">
              <ul className="nav nav-pills rounded nav-fill flex-column flex-md-row">
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0 active" data-toggle="tab" href="#"><span className="fas fa-tachometer-alt mr-2" />Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#"><span className="far fa-user-circle mr-2" />Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#"><span className="far fa-sun mr-2" />Settings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#"><span className="far fa-comments mr-2" />Messages</a>
                </li>
              </ul>
            </div>
            {/* End of Nav Wrapper */}
          </div>
        </div>
        {/* Title */}
        <div className="row mt-5 mb-4">
          <div className="col-md-4">
            <span className="h5">Pills with color variation</span>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-12">
            {/* Nav Wrapper */}
            <div className="nav-wrapper position-relative">
              <ul className="nav nav-pills nav-fill flex-column flex-md-row">
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0 active" href="#"><span className="icon-success"><span className="fas fa-tachometer-alt mr-2" />Dashboard</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#"><span className="icon-secondary"><span className="far fa-user-circle mr-2" />Profile</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#"><span className="icon-tertiary"><span className="far fa-sun mr-2" />Settings</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#"><span className="icon-info"><span className="far fa-comments mr-2" />Messages</span></a>
                </li>
              </ul>
            </div>
            {/* End of  Nav Wrapper */}
          </div>
        </div>
        {/* Title */}
        <div className="row mt-5 mb-4">
          <div className="col-md-4">
            <span className="h5">Circle Pills</span>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col">
            {/* Nav Wrapper */}
            <div className="nav-wrapper position-relative">
              <ul className="nav nav-pills nav-pill-circle flex-column flex-md-row">
                <li className="nav-item">
                  <a className="nav-link active" aria-label="first navigation tab" data-toggle="tab" href="#">
                    <span className="nav-link-icon d-block"><span className="far fa-user" /></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-label="second navigation tab" data-toggle="tab" href="#">
                    <span className="nav-link-icon d-block"><span className="far fa-lightbulb" /></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-label="third navigation tab" data-toggle="tab" href="#">
                    <span className="nav-link-icon d-block"><span className="far fa-sun" /></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-label="fourth navigation tab" data-toggle="tab" href="#">
                    <span className="nav-link-icon d-block"><span className="far fa-paper-plane" /></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-label="fifth navigation tab" data-toggle="tab" href="#">
                    <span className="nav-link-icon d-block"><span className="far fa-comments mr-2" /></span>
                  </a>
                </li>
              </ul>
            </div>
            {/* End of Nav Wrapper */}
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* Section */}
    <div className="section bg-primary pt-0 section-md">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="mb-4">
              <span className="h6 font-weight-bold">Pagination with icon-nav</span>
            </div>
            <nav aria-label="Blog page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-left" /></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-right" /></a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-6">
            <div className="mt-4 mb-4 mt-sm-0">
              <span className="h6 font-weight-bold">Pagination with text-nav</span>
            </div>
            <nav aria-label="Products page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="mb-4">
              <span className="h6 font-weight-bold">Disabled and active states</span>
            </div>
            <nav aria-label="Templates page navigation">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" aria-label="first link" tabIndex={-1} href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-6">
            <div className="mt-4 mb-4 mt-sm-0">
              <span className="h6 font-weight-bold">Choose your size</span>
            </div>
            <nav aria-label="Default page navigation">
              <ul className="pagination pagination-lg">
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-left" /></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-right" /></a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Themesberg page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-left" /></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-right" /></a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Posts navigation example">
              <ul className="pagination pagination-sm">
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-left" /></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-right" /></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* Section */}
    <div className="section bg-primary pt-0 section-md">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="mb-4">
              <span className="h6 font-weight-bold">Pagination with icon-nav</span>
            </div>
            <nav aria-label="Blog page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-left" /></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-right" /></a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-6">
            <div className="mt-4 mb-4 mt-sm-0">
              <span className="h6 font-weight-bold">Pagination with text-nav</span>
            </div>
            <nav aria-label="Products page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="mb-4">
              <span className="h6 font-weight-bold">Disabled and active states</span>
            </div>
            <nav aria-label="Templates page navigation">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" aria-label="first link" tabIndex={-1} href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-6">
            <div className="mt-4 mb-4 mt-sm-0">
              <span className="h6 font-weight-bold">Choose your size</span>
            </div>
            <nav aria-label="Default page navigation">
              <ul className="pagination pagination-lg">
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-left" /></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-right" /></a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Themesberg page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-left" /></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-right" /></a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Posts navigation example">
              <ul className="pagination pagination-sm">
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-left" /></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="first link" href="#"><span className="fas fa-angle-double-right" /></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* Section */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5 mb-5 mb-lg-0">
            <h2 className="mb-5 h5">Choose your color</h2>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-dark">Dark Color</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-gray">Gray Color</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-gray" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-success">Success Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-info">Info Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-danger">Danger Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="mb-5">
              <span className="h5">Stripped Progress Bars</span>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-dark">Dark Color</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-gray">Gray Color</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-gray" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-success">Success Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-info">Info Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-danger">Danger Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="mt-5 mb-4">
              <span className="h5">Inset Tooltip</span>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <h3 className="h4 progress-tooltip rounded p-2">Dark color</h3>
                <div className="progress-percentage">
                  <span>40%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <h3 className="h4 progress-tooltip rounded p-2">Gray color</h3>
                <div className="progress-percentage">
                  <span>40%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-gray" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <h3 className="h4 progress-tooltip rounded p-2">Success Color</h3>
                <div className="progress-percentage">
                  <span>40%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <h3 className="h4 progress-tooltip rounded p-2">Info color</h3>
                <div className="progress-percentage">
                  <span>40%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <h3 className="h4 progress-tooltip rounded p-2">Danger color</h3>
                <div className="progress-percentage">
                  <span>40%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mt-5 mb-4">
              <span className="h5">Choose your size</span>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info info-xl">
                <div className="progress-label">
                  <span className="text-dark">XL Progress Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>40%</span>
                </div>
              </div>
              <div className="progress progress-xl">
                <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info info-xl">
                <div className="progress-label">
                  <span className="text-dark">LG Progress Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress progress-lg">
                <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-dark">MD Progress Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-info">
                <div className="progress-label">
                  <span className="text-dark">SM Progress Bar</span>
                </div>
                <div className="progress-percentage">
                  <span>60%</span>
                </div>
              </div>
              <div className="progress progress-sm">
                <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* End of Hero */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="mb-4">
              <span className="h5">Default table</span>
            </div>
            <div className="mb-5">
              <table className="table shadow-soft rounded">
                <tbody><tr>
                    <th className="border-0" scope="col" id="class">Class</th>
                    <th className="border-0" scope="col" id="teacher">Teacher</th>
                    <th className="border-0" scope="col" id="males">Males</th>
                    <th className="border-0" scope="col" id="females">Females</th>
                  </tr>
                  <tr>
                    <th scope="row" id="firstyear" rowSpan={2}>First Year</th>
                    <th scope="row" id="Bolter" headers="firstyear teacher">D. Bolter</th>
                    <td headers="firstyear Bolter males">5</td>
                    <td headers="firstyear Bolter females">4</td>
                  </tr>
                  <tr>
                    <th scope="row" id="Cheetham" headers="firstyear teacher">A. Cheetham</th>
                    <td headers="firstyear Cheetham males">7</td>
                    <td headers="firstyear Cheetham females">9</td>
                  </tr>
                  <tr>
                    <th scope="row" id="secondyear" rowSpan={3}>Second Year</th>
                    <th scope="row" id="Lam" headers="secondyear teacher">M. Lam</th>
                    <td headers="secondyear Lam males">3</td>
                    <td headers="secondyear Lam females">9</td>
                  </tr>
                  <tr>
                    <th scope="row" id="Crossy" headers="secondyear teacher">S. Crossy</th>
                    <td headers="secondyear Crossy males">4</td>
                    <td headers="secondyear Crossy females">3</td>
                  </tr>
                  <tr>
                    <th scope="row" id="Forsyth" headers="secondyear teacher">A. Forsyth</th>
                    <td headers="secondyear Forsyth males">6</td>
                    <td headers="secondyear Forsyth females">9</td>
                  </tr>
                </tbody></table>
            </div>
            <div className="mb-5">
              <div className="mb-4">
                <span className="h5">Hoverable rows</span>
              </div>
              <table className="table table-hover shadow-inset rounded">
                <tbody><tr>
                    <th className="border-0" scope="col" id="class3">Class</th>
                    <th className="border-0" scope="col" id="teacher3">Teacher</th>
                    <th className="border-0" scope="col" id="males3">Males</th>
                    <th className="border-0" scope="col" id="females3">Females</th>
                  </tr>
                  <tr>
                    <th scope="row" id="firstyear3" rowSpan={2}>First Year</th>
                    <th scope="row" id="Bolter3" headers="firstyear3 teacher3">D. Bolter</th>
                    <td headers="firstyear3 Bolter3 males3">5</td>
                    <td headers="firstyear3 Bolter3 females3">4</td>
                  </tr>
                  <tr>
                    <th scope="row" id="Cheetham3" headers="firstyear3 teacher3">A. Cheetham</th>
                    <td headers="firstyear3 Cheetham3 males3">7</td>
                    <td headers="firstyear3 Cheetham3 females3">9</td>
                  </tr>
                  <tr>
                    <th scope="row" id="secondyear3" rowSpan={3}>Second Year</th>
                    <th scope="row" id="Lam3" headers="secondyear3 teacher3">M. Lam</th>
                    <td headers="secondyear3 Lam3 males3">3</td>
                    <td headers="secondyear3 Lam3 females3">9</td>
                  </tr>
                  <tr>
                    <th scope="row" id="Crossy3" headers="secondyear3 teacher3">S. Crossy</th>
                    <td headers="secondyear3 Crossy3 males3">4</td>
                    <td headers="secondyear3 Crossy3 females3">3</td>
                  </tr>
                  <tr>
                    <th scope="row" id="Forsyth3" headers="secondyear3 teacher3">A. Forsyth</th>
                    <td headers="secondyear3 Forsyth3 males3">6</td>
                    <td headers="secondyear3 Forsyth3 females3">9</td>
                  </tr>
                </tbody></table>
            </div>
            <div className="mb-5">
              <div className="mb-4">
                <span className="h5">Responsive Table</span>
              </div>
              <div className="table-responsive-sm shadow-soft rounded">
                <table className="table table-striped">
                  <tbody><tr>
                      <th className="border-0" scope="col" id="class2">Class</th>
                      <th className="border-0" scope="col" id="teacher2">Teacher</th>
                      <th className="border-0" scope="col" id="males2">Males</th>
                      <th className="border-0" scope="col" id="females2">Females</th>
                    </tr>
                    <tr>
                      <th scope="row" id="firstyear2" rowSpan={2}>First Year</th>
                      <th scope="row" id="Bolter2" headers="firstyear2 teacher2">D. Bolter</th>
                      <td headers="firstyear2 Bolter2 males2">5</td>
                      <td headers="firstyear2 Bolter2 females2">4</td>
                    </tr>
                    <tr>
                      <th scope="row" id="Cheetham2" headers="firstyear2 teacher2">A. Cheetham</th>
                      <td headers="firstyear2 Cheetham2 males2">7</td>
                      <td headers="firstyear2 Cheetham2 females2">9</td>
                    </tr>
                    <tr>
                      <th scope="row" id="secondyear2" rowSpan={3}>Second Year</th>
                      <th scope="row" id="Lam2" headers="secondyear2 teacher2">M. Lam</th>
                      <td headers="secondyear2 Lam2 males2">3</td>
                      <td headers="secondyear2 Lam2 females2">9</td>
                    </tr>
                    <tr>
                      <th scope="row" id="Crossy2" headers="secondyear2 teacher2">S. Crossy</th>
                      <td headers="secondyear2 Crossy2 males2">4</td>
                      <td headers="secondyear2 Crossy2 females2">3</td>
                    </tr>
                    <tr>
                      <th scope="row" id="Forsyth2" headers="secondyear2 teacher2">A. Forsyth</th>
                      <td headers="secondyear2 Forsyth2 males2">6</td>
                      <td headers="secondyear2 Forsyth2 females2">9</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Section */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        {/* Title  */}
        <div className="row">
          <div className="col-md-4">
            <div className="mb-5">
              <span className="font-weight-bold">Tab Style 1</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-10 col-lg-8">
            {/* Tab Nav */}
            <div className="nav-wrapper position-relative mb-4">
              <ul className="nav nav-pills flex-column flex-sm-row" id="tabs-text" role="tablist">
                <li className="nav-item mr-sm-3 mr-md-0">
                  <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-text-1-tab" data-toggle="tab" href="#tabs-text-1" role="tab" aria-controls="tabs-text-1" aria-selected="true">Account</a>
                </li>
                <li className="nav-item mr-sm-3 mr-md-0">
                  <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-2-tab" data-toggle="tab" href="#tabs-text-2" role="tab" aria-controls="tabs-text-2" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item mr-sm-3 mr-md-0">
                  <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-toggle="tab" href="#tabs-text-3" role="tab" aria-controls="tabs-text-3" aria-selected="false">Messages</a>
                </li>
              </ul>
            </div>
            {/* End of Tab Nav */}
            {/* Tab Content */}
            <div className="card shadow-inset bg-primary border-light p-4 rounded">
              <div className="card-body p-0">
                <div className="tab-content" id="tabcontent1">
                  <div className="tab-pane fade show active" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
                    <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus,
                      Marfa eiusmod Pinterest in do umami readymade swag.</p>
                    <p>Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.</p>
                  </div>
                  <div className="tab-pane fade" id="tabs-text-2" role="tabpanel" aria-labelledby="tabs-text-2-tab">
                    <p>Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod
                      Pinterest in do umami readymade swag.</p>
                    <p>Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.</p>
                  </div>
                  <div className="tab-pane fade" id="tabs-text-3" role="tabpanel" aria-labelledby="tabs-text-3-tab">
                    <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus,
                      Marfa eiusmod Pinterest in do umami readymade swag.</p>
                    <p>Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Tab Content */}
          </div>
        </div>
        {/* Title  */}
        <div className="row">
          <div className="col-md-4">
            <div className="mt-5 mb-5">
              <span className="font-weight-bold">Tab With Icons</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-10 col-lg-8">
            {/* Tab Nav */}
            <div className="nav-wrapper position-relative mb-4">
              <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-icons-text-1-tab" data-toggle="tab" href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="true"><i className="fas fa-tint" />Design</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-2-tab" data-toggle="tab" href="#tabs-icons-text-2" role="tab" aria-controls="tabs-icons-text-2" aria-selected="false"><i className="fas fa-bug" />Code</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-3-tab" data-toggle="tab" href="#tabs-icons-text-3" role="tab" aria-controls="tabs-icons-text-3" aria-selected="false"><i className="fas fa-user-astronaut" />UX / UI</a>
                </li>
              </ul>
            </div>
            {/* End of Tab Nav */}
            {/* Tab Content */}
            <div className="card shadow-inset bg-primary border-light p-4 rounded">
              <div className="card-body p-0">
                <div className="tab-content" id="tabcontent2">
                  <div className="tab-pane fade show active" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
                    <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus,
                      Marfa eiusmod Pinterest in do umami readymade swag.</p>
                    <p>Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.</p>
                  </div>
                  <div className="tab-pane fade" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                    <p>Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod
                      Pinterest in do umami readymade swag.</p>
                    <p>Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.</p>
                  </div>
                  <div className="tab-pane fade" id="tabs-icons-text-3" role="tabpanel" aria-labelledby="tabs-icons-text-3-tab">
                    <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus,
                      Marfa eiusmod Pinterest in do umami readymade swag.</p>
                    <p>Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Tab Content */}
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* Section */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 col-lg-4">
            <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header text-dark">
                <span className="fab fa-bootstrap" />
                <strong className="mr-auto ml-2">Neumorphism</strong>
                <small className="text-gray">11 mins ago</small>
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="toast bg-primary shadow-inset text-dark fade show" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header text-dark">
                <span className="fab fa-bootstrap" />
                <strong className="mr-auto ml-2">Neumorphism</strong>
                <small>11 mins ago</small>
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* Section */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        {/* End of Title */}
        <div className="row mt-5">
          <div className="col-lg-12 d-block d-md-flex justify-content-around">
            <button type="button" className="btn btn-primary btn-sm mr-4 mb-4" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
              Tooltip on top
            </button>
            <button type="button" className="btn btn-primary btn-sm mr-4 mb-4" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              Tooltip on right
            </button>
            <button type="button" className="btn btn-primary btn-sm mr-4 mb-4" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
              Tooltip on bottom
            </button>
            <button type="button" className="btn btn-primary btn-sm mr-4 mb-4" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
              Tooltip on left
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* Section */}
    <div className="section bg-primary pt-0 section-lg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>h1. Bootstrap heading</h1>
            <h2>h2. Bootstrap heading</h2>
            <h3>h3. Bootstrap heading</h3>
            <h4>h4. Bootstrap heading</h4>
            <h5>h5. Bootstrap heading</h5>
            <h6>h6. Bootstrap heading</h6>
          </div>
        </div>
        {/* Title  */}
        <div className="row">
          <div className="col-md-4">
            <div className="mt-6 mb-5">
              <span className="h6 font-weight-bold">Customizing headings</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-12">
            <h1>
              Fancy display heading
              <small className="text-muted">With faded secondary text</small>
            </h1>
            <h2>
              Fancy display heading
              <small className="text-muted">With faded secondary text</small>
            </h2>
            <h3>
              Fancy display heading
              <small className="text-muted">With faded secondary text</small>
            </h3>
            <h4>
              Fancy display heading
              <small className="text-muted">With faded secondary text</small>
            </h4>
            <h5>
              Fancy display heading
              <small className="text-muted">With faded secondary text</small>
            </h5>
            <h6>
              Fancy display heading
              <small className="text-muted">With faded secondary text</small>
            </h6>
          </div>
        </div>
        {/* Title  */}
        <div className="row">
          <div className="col-md-4">
            <div className="mt-6 mb-5">
              <span className="h6 font-weight-bold">Display headings</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-1">Display 1</h1>
            <h1 className="display-2">Display 2</h1>
            <h1 className="display-3">Display 3</h1>
            <h1 className="display-4">Display 4</h1>
          </div>
        </div>
        {/* Title  */}
        <div className="row">
          <div className="col-md-4">
            <div className="mt-6 mb-5">
              <span className="h6 font-weight-bold">Paragraphs</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <span className="h6 font-weight-bold">Simple paragraph</span>
            </div>
            <p>Start your development with a Pixel Design System for Bootstrap 4.Themesberg makes beautiful products to help people with creative ideas succeed.Our company empowers millions of people.
            </p>
          </div>
          <div className="col-md-6">
            <div className="mt-5 mb-3 mt-sm-0">
              <span className="h6 font-weight-bold">Lead paragraph</span>
            </div>
            <p className="lead">Start your development with a Pixel Design System for Bootstrap 4.Themesberg makes beautiful products to help people with creative ideas succeed.Our company empowers millions of people.</p>
          </div>
        </div>
        <div className="row mt-4 mb-3 align-items-center">
          <div className="col-sm-2">
            <small className="text-uppercase text-muted">Dark text</small>
          </div>
          <div className="col-sm-10">
            <p className="text-dark mb-0">Design is not just what it looks like and feels like. Design is how it works.</p>
          </div>
        </div>
        <div className="row py-3 align-items-center">
          <div className="col-sm-2">
            <small className="text-uppercase text-muted">Secondary text</small>
          </div>
          <div className="col-sm-10">
            <p className="text-secondary mb-0">Design is not just what it looks like and feels like. Design is how it works.</p>
          </div>
        </div>
        <div className="row py-3 align-items-center">
          <div className="col-sm-2">
            <small className="text-uppercase text-muted">Tertiary text</small>
          </div>
          <div className="col-sm-10">
            <p className="text-tertiary mb-0">Design is not just what it looks like and feels like. Design is how it works.</p>
          </div>
        </div>
        <div className="row py-3 align-items-center">
          <div className="col-sm-2">
            <small className="text-uppercase text-muted">Info text</small>
          </div>
          <div className="col-sm-10">
            <p className="text-info mb-0">Design is not just what it looks like and feels like. Design is how it works.</p>
          </div>
        </div>
        <div className="row py-3 align-items-center">
          <div className="col-sm-2">
            <small className="text-uppercase text-muted">Danger text</small>
          </div>
          <div className="col-sm-10">
            <p className="text-danger mb-0">Design is not just what it looks like and feels like. Design is how it works.</p>
          </div>
        </div>
        <div className="row py-3 align-items-center">
          <div className="col-sm-2">
            <small className="text-uppercase text-muted">Success text</small>
          </div>
          <div className="col-sm-10">
            <p className="text-success mb-0">Design is not just what it looks like and feels like. Design is how it works.</p>
          </div>
        </div>
        {/* Title  */}
        <div className="row">
          <div className="col-md-4">
            <div className="mt-6 mb-5">
              <span className="h6">Blockquote</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-8">
            <blockquote className="blockquote text-center">
              Themesberg makes beautiful products to help people with creative ideas succeed. Our company empowers millions of people.
              <footer className="blockquote-footer mt-3 text-dark">Zoltan Szőgyényi</footer>
            </blockquote>
          </div>
        </div>
        {/* Title  */}
        <div className="row">
          <div className="col-md-4">
            <div className="mt-6 mb-5">
              <span className="h6">Lists</span>
            </div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <span className="h6">Unordered</span>
            </div>
            <ul>
              <li>Minutes of the last meeting</li>
              <li>Do we need yet more meetings?</li>
              <li>Any other business
                <ul>
                  <li>Programming</li>
                  <li>Web Design</li>
                  <li>Database</li>
                </ul>
              </li>
              <li>Something funny</li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="mt-5 mb-3 mt-sm-0">
              <span className="h6 font-weight-bold">Ordered</span>
            </div>
            <ol>
              <li>Minutes of the last meeting</li>
              <li>Do we need yet more meetings?</li>
              <li>Any other business
                <ol>
                  <li>Programming</li>
                  <li>Web Design</li>
                  <li>Database</li>
                </ol>
              </li>
              <li>Something funny</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* End of Section */}
    {/* si asa mai departe */}
    <section className="section section-md bg-soft">
      <div className="container">
        <div className="row justify-content-center mb-5 mb-lg-6">
          <div className="col-12 text-center">
            <h2 className="h1 px-lg-5">5 neumorphic example pages</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-4 mb-5">
            <a href="./html/pages/about.html" className="page-preview scale-up-hover-2">
              <img className="shadow-soft rounded scale" src=".//assets/img/presentation/all-pages/about.jpg" alt="About company page preview" />
              <div className="text-center show-on-hover">
                <h3 className="h6 m-0 text-center">About<span className="fas fa-external-link-alt ml-2" /></h3>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-4 mb-5">
            <a href="./html/pages/pricing.html" className="page-preview scale-up-hover-2">
              <img className="shadow-soft rounded scale" src=".//assets/img/presentation/all-pages/pricing.jpg" alt="Pricing page preview" />
              <div className="text-center show-on-hover">
                <h3 className="h6 m-0 text-center">Pricing<span className="fas fa-external-link-alt ml-2" /></h3>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-4 mb-5">
            <a href="./html/pages/contact.html" className="page-preview scale-up-hover-2">
              <img className="shadow-soft rounded scale" src=".//assets/img/presentation/all-pages/contact.jpg" alt="Contact page preview" />
              <div className="text-center show-on-hover">
                <h3 className="h6 m-0 text-center">Contact<span className="fas fa-external-link-alt ml-2" /></h3>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5">Special pages</h2>
          </div>
          <div className="col-6 col-lg-4 mb-5">
            <a href="./html/pages/sign-in.html" className="page-preview scale-up-hover-2">
              <img className="shadow-soft rounded scale" src=".//assets/img/presentation/all-pages/sign-in.jpg" alt="Sign in page preview" />
              <div className="text-center show-on-hover">
                <h3 className="h6 m-0 text-center">Sign in<span className="fas fa-external-link-alt ml-2" /></h3>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-4 mb-5">
            <a href="./html/pages/sign-up.html" className="page-preview scale-up-hover-2">
              <img className="shadow-soft rounded scale" src=".//assets/img/presentation/all-pages/sign-up.jpg" alt="Sign up page preview" />
              <div className="text-center show-on-hover">
                <h3 className="h6 m-0 text-center">Sign up<span className="fas fa-external-link-alt ml-2" /></h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg bg-soft">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="font-weight-light">Notable <span className="font-weight-bold">features</span></h1>
            <p className="lead">You get all Bootstrap components fully customized. Besides, you receive numerous plugins out of the box and ready to use</p>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center mb-5">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <span className="fab fa-bootstrap" />
              </div>
              <h2 className="h5 my-3">Latest Bootstrap</h2>
              <p>A responsive and mobile-first theme built with the world's most popular CSS framework</p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center mb-5">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <span className="fab fa-sass" />
              </div>
              <h2 className="h5 my-3">Build with Sass</h2>
              <p>Change one variable and the theme adapts. Colors, fonts, sizes, buttons... you name it
              </p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center mb-5">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <span className="fas fa-mobile-alt" />
              </div>
              <h2 className="h5 my-3">Responsive Design</h2>
              <p>Did you know 53% of the world web traffic is mobile? Pixel is fully responsive and mobile first</p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center mb-5">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <span className="fas fa-puzzle-piece" />
              </div>
              <h2 className="h5 my-3">Modular approach</h2>
              <p>Nicely customized components that can be reused anytime and anywhere in your project</p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center mb-5">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <span className="fab fa-gulp" />
              </div>
              <h2 className="h5 my-3">Gulp &amp; BrowserSync</h2>
              <p>With our custom Gulp commands &amp; BrowserSync we offer a seemless and fast workflow for your project</p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center mb-5">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <span className="fas fa-file-alt" />
              </div>
              <h2 className="h5 my-3">Well documented</h2>
              <p>Our kit is delivered with very detailed documentation, describing all components, styles and usages</p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <span className="fas fa-tachometer-alt" />
              </div>
              <h2 className="h5 my-3">Google PageSpeed</h2>
              <p>Neumorphism UI has 80+ scores on Google PageSpeed Insights to offer you and your clients a fast website
              </p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center mb-5">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <span className="fas fa-image" />
              </div>
              <h2 className="h5 my-3">SVG illustrations</h2>
              <p>Photography and Illustration SVGs are included in the download package and are free to use
              </p>
            </div>
            {/* End of Icon box */}
          </div>
          <div className="col-md-4">
            {/* Icon box */}
            <div className="icon-box text-center mb-5">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <img className="navbar-brand-dark" style={{height: 20}} src="./assets/img/brand/dark.svg" alt="Neumorphism logo" />
              </div>
              <h2 className="h5 my-3">Neumorphic design</h2>
              <p>We crafted each component with great care so it represents the latest neumorphic design trend</p>
            </div>
            {/* End of Icon box */}
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg bg-soft">
      <div className="container">
        <div className="row justify-content-center mb-5 mb-lg-6">
          <div className="col-12 text-center">
            <h2 className="h1 px-lg-5">What's inside?</h2>
            <p className="lead px-lg-8">We have carefully crafted the perfect folder structure to ensure that finding the files you're looking for are easily reachable and well organized.</p>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-6 mb-4">
            <div className="d-none d-lg-block mt-5">
              <h3 className="h4">You need only HTML, CSS and Javascript?</h3>
              <p className="lead mb-4">Don't worry, we got you covered. We have a folder called <code className="text-danger">html&amp;css</code> which includes only the basic HTML5, CSS3 and Javascript technologies.</p>
              <a href="https://themesberg.com/docs/neumorphism-ui/getting-started/file-structure/" target="_blank" className="btn btn-primary"><span className="fas fa-book mr-2" /> File Structure</a>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-lg-first d-flex justify-content-center">
            <ul className="d-block fmw-100 list-style-none folder-structure">
              <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with"><span className="fas fa-folder mr-2" />src</li>
              <li>
                <ul className="list-style-none pl-4">
                  <li data-toggle="tooltip" data-placement="left" title="CSS, Images, Fonts and Javascript"><span className="fas fa-folder mr-2" /> assets</li>
                  <li data-toggle="tooltip" data-placement="left" title="HTML templates"><span className="fas fa-folder mr-2" /> html</li>
                  <li data-toggle="tooltip" data-placement="left" title="Partials are HTML snippets that are included in multiple pages, such as the menu or footer"><span className="fas fa-folder mr-2" /> partials</li>
                  <li data-toggle="tooltip" data-placement="left" title="Sass source files"><span className="fas fa-folder mr-2" /> scss</li>
                  <li data-toggle="tooltip" data-placement="left" title="The page you're looking at right now. Call it inception."><span className="fab fa-html5 mr-2 text-secondary" /> index.html</li>
                </ul>
              </li>
              <li data-toggle="tooltip" data-placement="left" title="Neumorphism UI with only HTML, CSS and Javascript"><span className="fas fa-folder mr-2 text-muted" /> html&amp;css</li>
              <li data-toggle="tooltip" data-placement="left" title="Temporary folder that is created when serving files with BrowserSync"><span className="fas fa-folder text-muted mr-2" />.temp</li>
              <li data-toggle="tooltip" data-placement="left" title="Minified version of the project"><span className="fas fa-folder mr-2 text-muted" /> dist</li>
              <li data-toggle="tooltip" data-placement="left" title="Project dependencies from package.json"><span className="fas fa-folder text-muted mr-2" /> node_modules
              </li>
              <li data-toggle="tooltip" data-placement="left" title="Development workflow commands. We have them well documented."><span className="fab fa-js-square mr-2 text-warning" /> gulpfile.js</li>
              <li data-toggle="tooltip" data-placement="left" title="Project details and dependencies."><span className="fas fa-file-code mr-2 text-tertiary" /> package.json</li>
              <li data-toggle="tooltip" data-placement="left" title="No project can miss a README :)"><span className="fas fa-file-code mr-2 text-tertiary" /> README.md</li>
              <li data-toggle="tooltip" data-placement="left" title="This file ensures that generated files and folder are ignored by Git. (eg. node_modules)">
                <span className="fas fa-file-code mr-2 text-tertiary" /> .gitignore</li>
            </ul>
          </div>
          <div className="col-12 mt-5 d-lg-none">
            <h3 className="h5">You need only HTML, CSS and Javascript?</h3>
            <p>Don't worry, we got you covered. We have a folder called <code className="text-danger">html&amp;css</code> which includes only the basic HTML5, CSS3 and Javascript technologies.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg bg-soft">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-xl-12">
            <h1 className="font-weight-light mb-4">WCAG 2.1 accessible <span className="font-weight-bold">color scheme</span>
            </h1>
            <p className="lead">
              We've enhanced the color settings <br /> to comply with the latest accessibility standards
            </p>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card shadow-soft border-light bg-light p-5 text-center mb-4">
              <div className="color-shape rounded bg-soft m-auto" />
              <div className="mt-4">
                <h2 className="h5 text-dark">Primary:</h2>
                <span className="font-weight-bold text-dark">#174F84</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card shadow-soft border-light bg-soft p-5 text-center mb-4">
              <div className="color-shape rounded bg-secondary m-auto" />
              <div className="mt-4">
                <h2 className="h5 text-dark">Secondary:</h2>
                <span className="font-weight-bold text-dark">#10AB7C</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card shadow-soft border-light bg-soft p-5 text-center mb-4">
              <div className="color-shape rounded bg-info m-auto" />
              <div className="mt-4 text-dark">
                <h2 className="h5">Info:</h2>
                <span className="font-weight-bold text-dark">#1E90FF</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card shadow-soft border-light bg-soft p-5 text-center mb-4">
              <div className="color-shape rounded bg-warning m-auto" />
              <div className="mt-4 text-dark">
                <h2 className="h5">Warning:</h2>
                <span className="font-weight-bold text-dark">#F5B759</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card shadow-soft border-light bg-soft p-5 text-center mb-4">
              <div className="color-shape rounded bg-success m-auto" />
              <div className="mt-4 text-dark">
                <h2 className="h5">Success:</h2>
                <span className="font-weight-bold text-dark">#00BF9A</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card shadow-soft border-light bg-soft p-5 text-center mb-4">
              <div className="color-shape rounded bg-danger m-auto" />
              <div className="mt-4 text-dark">
                <h2 className="h5">Danger:</h2>
                <span className="font-weight-bold text-dark">#FA5252</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card shadow-soft border-light bg-soft p-5 text-center mb-4">
              <div className="color-shape rounded bg-dark m-auto" />
              <div className="mt-4">
                <h2 className="h5 text-dark">Dark:</h2>
                <span className="font-weight-bold text-dark">#2A354F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg bg-soft">
      <div className="container">
        <div className="row justify-content-center text-center text-dark mb-5">
          <div className="col-lg-9 col-xl-8">
            <h2 className="h1 font-weight-light mb-3">Less <span className="font-weight-bold">work</span>, more <span className="font-weight-bold">flow</span>.</h2>
            <p className="lead">
              Boost productivity with BrowserSync. SCSS changes are reflected instantly and pages scroll and refresh on devices as you work.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-6">
          <div className="col-md-10 col-xl-9">
            <div className="position-relative">
              <div className="rounded shadow-soft border border-light bg-soft p-4 mb-2">
                <div className="mb-3">
                  <div className="font-weight-normal">&gt; $ npm install</div>
                  <div className="text-muted">Everything’s installed!</div>
                </div>
                <div className="mb-3">
                  <div className="font-weight-normal">&gt; $ gulp</div>
                  <div className="text-muted">SCSS watching</div>
                  <div className="text-muted">LiveReload started</div>
                  <div className="text-muted">Opening localhost:3000</div>
                </div>
                <div>
                  <div className="font-weight-normal">&gt; $ that's it?</div>
                  <div className="text-muted">It's that simple!</div>
                </div>
              </div>
            </div>
            <div className="alert alert-dark shadow-soft position-relative mt-4"><span className="fas fa-question-circle mr-2" /> Looks unfamiliar? Don’t worry! Our <a className="text-dark font-weight-bold text-underline" href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/" target="_blank">documentation</a> has got you covered.</div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h2 className="h1 font-weight-light mb-3"><strong>Open source</strong> project</h2>
            <p className="lead mb-4">Neumorphism UI is an open source UI Kit that is licensed under the MIT License. Consider giving us a star on the official Github repository to spread the news!</p>
            <div className="d-flex align-items-center">
              <a href="https://github.com/themesberg/pixel-bootstrap-ui-kit" target="_blank" className="btn btn-primary mr-4">
                <span className="fab fa-github mr-1" /> View on GitHub
              </a>
              {/* Place this tag where you want the button to render. */}
              <div className="mt-2">
                {/* Place this tag where you want the button to render. */}
                <a className="github-button" href="https://github.com/themesberg/neumorphism-ui" data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themesberg/neumorphism-ui on GitHub">Star</a>                            
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="github-big-icon">
              <span className="fab fa-github" />
            </div>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="card bg-soft shadow-soft border-light p-4">
              {/* Header */}
              <div className="card-header pb-0">
                <span className="d-block">
                  <span className="h2 font-weight-bold align-top">Free Demo</span>
                </span>
              </div>
              {/* End Header */}
              {/* Content */}
              <div className="card-body">
                <ul className="list-group list-group-flush price-list">
                  <li className="list-group-item bg-soft pl-0"><strong>200</strong> Components</li>
                  <li className="list-group-item bg-soft pl-0"><strong>5</strong> Example Pages</li>
                  <li className="list-group-item bg-soft pl-0"><span className="text-danger"><span className="fas fa-times-circle" /></span> Uncoventional cards</li>
                  <li className="list-group-item bg-soft pl-0"><span className="text-danger"><span className="fas fa-times-circle" /></span> Timelines</li>
                  <li className="list-group-item bg-soft pl-0"><span className="text-danger"><span className="fas fa-times-circle" /></span> E-commerce</li>
                  <li className="list-group-item bg-soft pl-0"><span className="text-danger"><span className="fas fa-times-circle" /></span> Widgets</li>
                  <li className="list-group-item bg-soft pl-0 pb-0"><span className="text-danger"><span className="fas fa-times-circle" /></span> Premium Support</li>
                </ul>
              </div>
              {/* End Content */}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 mt-lg-n4">
            <div className="card bg-soft shadow-soft border-light p-4">
              {/* Header */}
              <div className="card-header pb-0">
                <span className="d-block">
                  <span className="h2 font-weight-bold align-top">Pro Version</span>
                </span>
              </div>
              {/* End Header */}
              {/* Content */}
              <div className="card-body">
                <ul className="list-group list-group-flush price-list">
                  <li className="list-group-item bg-soft pl-0"><strong>1000+</strong> Components</li>
                  <li className="list-group-item bg-soft pl-0"><strong>13</strong> Example Pages</li>
                  <li className="list-group-item bg-soft pl-0"><span className="text-success"><span className="fas fa-check-circle" /></span> Uncoventional cards</li>
                  <li className="list-group-item bg-soft pl-0"><span className="text-success"><span className="fas fa-check-circle" /></span> Timelines</li>
                  <li className="list-group-item bg-soft pl-0"><span className="text-success"><span className="fas fa-check-circle" /></span> E-commerce</li>
                  <li className="list-group-item bg-soft pl-0"><span className="text-success"><span className="fas fa-check-circle" /></span> Widgets</li>
                  <li className="list-group-item bg-soft border-0 pl-0 pb-0"><span className="text-success"><span className="fas fa-check-circle" /></span> Premium Support</li>
                </ul>
                <a href="https://themesberg.com/product/ui-kits/neumorphism-ui-pro" target="_blank" className="btn btn-block btn-primary text-secondary mt-4 mr-3"><i className="far fa-paper-plane mr-2" /> Upgrade to PRO</a>
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="d-flex pb-5 pt-6 pt-md-7 border-top border-light bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <p><strong>Neumorphism UI PRO</strong> is a premium Bootstrap UI Kit built based on the newest design trend called Neumorphism.</p>
          <ul className="d-flex list-unstyled mb-5 mb-lg-0">
            <li className="mr-2">
              <a href="https://twitter.com/themesberg" target="_blank" className="btn btn-icon-only btn-pill btn-primary" aria-label="twitter social link" data-toggle="tooltip" data-placement="top" title="Follow @themesberg on Twitter">
                <span aria-hidden="true" className="fab fa-twitter" />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://www.facebook.com/themesberg/" target="_blank" className="btn btn-icon-only btn-pill btn-primary" aria-label="facebook social link" data-toggle="tooltip" data-placement="top" title="Like @themesberg on Facebook">
                <span aria-hidden="true" className="fab fa-facebook" />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://github.com/themesberg" target="_blank" className="btn btn-icon-only btn-pill btn-primary" aria-label="github social link" data-toggle="tooltip" data-placement="top" title="Open source projects">
                <span aria-hidden="true" className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/themesberg" target="_blank" className="btn btn-icon-only btn-pill btn-primary" aria-label="dribbble social link" data-toggle="tooltip" data-placement="top" title="Follow us on Dribbble">
                <span aria-hidden="true" className="fab fa-dribbble" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-5 mb-lg-0">
          <h5>Themesberg</h5>
          <ul className="footer-links list-unstyled mt-2">
            <li className="mb-1"><a className="p-2" target="_blank" href="https://themesberg.com/blog">Blog</a></li>
            <li className="mb-1"><a className="p-2" target="_blank" href="https://themesberg.com/products">Products</a></li>
            <li className="mb-1"><a className="p-2" target="_blank" href="https://themesberg.com/about">About Us</a></li>
            <li><a className="p-2" target="_blank" href="https://themesberg.com/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-5 mb-lg-0">
          <h5>Other</h5>
          <ul className="footer-links list-unstyled mt-2">
            <li className="mb-1"><a className="p-2" href="https://themesberg.com/docs/pixel-bootstrap/getting-started/overview/" target="_blank">Docs
                <span className="badge badge-gray text-uppercase ml-2">v1.0</span></a>
            </li>
            <li className="mb-1">
              <a className="p-2" href="https://themesberg.com/docs/pixel-bootstrap/getting-started/changelog" target="_blank">Changelog</a>
            </li>
            <li className="mb-1">
              <a className="p-2" target="_blank" href="https://themesberg.com/licensing">License</a>
            </li>
            <li>
              <a className="p-2" target="_blank" href="https://github.com/themesberg/pixel-bootstrap-ui-kit/issues">Support</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <h5>Subscribe</h5>
          <p className="text-gray font-small mt-2">Join our mailing list. We write rarely, but only the best content.</p>
          <form action="#">
            <div className="form-row mb-2">
              <div className="col-12">
                <label className="h6 font-weight-normal d-none" htmlFor="exampleInputEmail3">Email address</label>
                <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" id="exampleInputEmail3" required />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block" data-loading-text="Sending">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </form>
          <p className="text-gray font-small m-0">We’ll never share your details. See our <a className="text-black" href="#">Privacy Policy</a></p>
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <a href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
            <img src="./assets/img/themesberg.svg" height={25} className="mb-3" alt="Themesberg Logo" />
          </a>
          <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
            <p className="font-weight-normal font-small mb-0">Copyright © Themesberg
              <span className="current-year">2020</span>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

    );
}

export default Login;