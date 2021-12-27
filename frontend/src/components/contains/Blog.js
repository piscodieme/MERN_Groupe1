import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Blog extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div class="main-blog-area pb-100px pt-100px">
        <div class="container">
            {/* section title start */}
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title text-center mb-30px0px">
                        <h2 class="title">Latest Blog</h2>
                        <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            {/* section title start */}

            <div class="row">
                <div class="col-lg-4 col-md-6 mb-md-30px mb-lm-30px">
                    <div class="single-blog">
                        <div class="blog-image">
                            <a href="blog-single-left-sidebar.html">
                                <img src="assets/images/blog-image/1.jpg" class="img-responsive w-100" alt=""/>
                            </a>
                        </div>
                        <div class="blog-text">
                            <div class="blog-athor-date">
                                <span> By,<a class="blog-author cercle-shape" href="blog-single-left-sidebar.html"> June Cha</a></span>
                                <span class="blog-date">25 May, 2121</span>
                            </div>
                            <h3 class="blog-heading"><a class="blog-heading-link" href="blog-single-left-sidebar.html">How to Explain Handmade Product to Your Boss</a></h3>

                            <a href="blog-single-left-sidebar.html" class="btn btn-primary blog-btn"> Read More</a>
                        </div>
                    </div>
                </div>
                {/* End single blog */}
                <div class="col-lg-4 col-md-6 mb-md-30px mb-lm-30px">
                    <div class="single-blog ">
                        <div class="blog-image">
                            <a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/2.jpg" class="img-responsive w-100" alt=""/></a>
                        </div>
                        <div class="blog-text">
                            <div class="blog-athor-date">
                                <span> By,<a class="blog-author cercle-shape" href="blog-single-left-sidebar.html"> June Cha</a></span>
                                <span class="blog-date">25 May, 2121</span>
                            </div>
                            <h5 class="blog-heading"><a class="blog-heading-link" href="blog-single-left-sidebar.html">7 Best Blogs to Follow About Handmade Goods
                                </a></h5>

                            <a href="blog-single-left-sidebar.html" class="btn btn-primary blog-btn"> Read More</a>
                        </div>
                    </div>
                </div>
                {/* End single blog */}
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="blog-image">
                            <a href="blog-single-left-sidebar.html">
                                <img src="assets/images/blog-image/3.jpg" class="img-responsive w-100" alt=""></img>
                            </a>
                        </div>
                        <div class="blog-text">
                            <div class="blog-athor-date">
                                <span> By,<a class="blog-author cercle-shape" href="blog-single-left-sidebar.html"> June Cha</a></span>
                                <span class="blog-date">25 May, 2121</span>
                            </div>
                            <h5 class="blog-heading"><a class="blog-heading-link" href="blog-single-left-sidebar.html">Us Too. 6 Reasons We Just Can't Stop
                                </a></h5>


                            <a href="blog-single-left-sidebar.html" class="btn btn-primary blog-btn"> Read More</a>
                        </div>
                    </div>
                </div>
                {/*} End single blog */}
            </div>
        </div>
    </div>
            </>
        )
    }
}

Blog.propTypes = {

}

export default Blog