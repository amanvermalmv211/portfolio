import React from 'react'

const Contact = (props) => {

    return (
        <>
            <section className="contact bg-blend-darken h-fit flex flex-col items-center justify-center lg:py-20 md:py-72 py-28 px-3 scroll-mt-[1500px]" id='contact' >
                <h1 className='text-5xl my-4 mb-12 font-bold drop-shadow-[1px_2px_2px_rgb(255,255,255)]'>Get in touch</h1>
                <section className="formContent">
                    <form action="https://formspree.io/f/mpzgqqkz" method="post">
                        <div className="container flex flex-col items-center justify-center md:w-96 min-w-80 p-5 rounded-xl border-2 border-white bg-black bg-opacity-25 text-white">
                            <div className="box border-b-2 border-white my-4">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <input className='border-none outline-none text-xl mx-1 p-1' type="text" name="username" id="email" placeholder="Enter your Name" required />
                            </div>

                            <div className="box border-b-2 border-white my-4">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <input className='border-none outline-none text-xl mx-1 p-1' type="email" name="email" id="password" placeholder="Enter your Email" required />
                            </div>

                            <div className="box border-b-2 border-white my-4">
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                <input className='border-none outline-none text-xl mx-1 p-1' type="text" name="subject" id="password" placeholder="Enter your Phone No." required />
                            </div>

                            <div className="box border-b-2 border-white my-4">
                                <i className="fa fa-commenting-o" aria-hidden="true"></i>
                                <textarea className='border-none outline-none text-xl mx-1 p-1' name="textarea" rows="1" placeholder="Write Message"></textarea>
                            </div>
                            <input className='btn bgC2' type="submit" id="submit" value="Submit" />

                        </div>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Contact