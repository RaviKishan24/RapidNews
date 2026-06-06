import React from 'react';
import Wrapper from './Wrapper';

function Footer() {
    return (
        <Wrapper>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                
                <nav>
                    <h6 className="footer-title">RapidNews</h6>
                    <a className="link link-hover">Top Stories</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Trending</a>
                    <a className="link link-hover">Breaking News</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Categories</h6>
                    <a className="link link-hover">Business</a>
                    <a className="link link-hover">Technology</a>
                    <a className="link link-hover">Sports</a>
                    <a className="link link-hover">Health</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Advertise With Us</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>

                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label className="label">
                            Get daily news updates
                        </label>
                        <div className="join">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered join-item w-full"
                            />
                            <button className="btn btn-primary join-item">
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </form>
            </footer>

            <div className="border-t border-base-300 py-4 text-center text-sm bg-base-200">
                © {new Date().getFullYear()} RapidNews. All rights reserved.
            </div>
        </Wrapper>
    );
}

export default Footer;