import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section className="bread_title py-5">

	  <div className="container my-5">

		<div className="row py-5">

			<div className="col-md-12 mt-4 text-center">

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>About Us</h5>

				<p className="mt-4 text-white">Home/<span>About Us</span></p>

			</div>

		</div>

	  </div>

 </section>




 <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">

			<div className="col-md-6 my-auto">

				<h5 className="sub_heading">SINCE 1986</h5>

				<h2 className="main_heading">We design thoughtful, livable spaces.</h2>

				<p className="my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>

				<div className="row mt-4">

					<div className="col-md-6 mb-4">

						<div className="fea_point">

							<div className="fea_count"><img src="/images/tick.png"/></div>
							<div className="fea_label">Latest technologies</div>

						</div>

					</div>

					<div className="col-md-6 mb-4">

						<div className="fea_point">

							<div className="fea_count"><img src="/images/tick.png"/></div>
							<div className="fea_label">5 Years Warranty</div>

						</div>

					</div>

					<div className="col-md-6 mb-4">

						<div className="fea_point">

							<div className="fea_count"><img src="/images/tick.png"/></div>
							<div className="fea_label">High-Quality Designs</div>

						</div>

					</div>

					<div className="col-md-6 mb-4">

						<div className="fea_point">

							<div className="fea_count"><img src="/images/tick.png"/></div>
							<div className="fea_label">20 Years Work Experiences</div>

						</div>

					</div>



				</div>


			</div>


			<div className="col-md-6 my-auto">

				<img src="/images/about2.jpg" className="w-100" style={{borderRadius: "30px" , height: "460px"}}/>

			</div>


		</div>

	  </div>

 </section>

         </>
  );
}