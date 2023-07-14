import React from "react"

const AboutUs = () => {
  return (
    <div>
      <div class="w-full px-6 lg:px-44 py-12 lg:py-24">
        <h1 class="text-5xl font-bold mb-8">About</h1>
        <div class="content-wrapper">
          <div>
            <div className="text-lg text-black font-medium">
              <p>
                <img
                  className="rounded-2xl my-6 w-full object-cover h-[296px]"
                  src="./Images/About-Us.png"
                  alt="Acceptance guidelines.webp"
                />
              </p>
              <h2
                className="text-green-500 text-2xl py-4 font-bold"
                id="whoarewe"
              >
                Who are we?
              </h2>
              <p>
                Based in Kent, lego2sell.com Is a family-run enterprise that is
                the original and first online new LEGO® Sets dedicated website
                to sell your new sets for cash! We aim to take the hassle out of
                flogging your LEGO® sets with our easy selling process and
                speedy payments. We are also dedicated to helping you declutter
                and make a few extra quid.
              </p>

              <p className="py-4">
                Yes, you may get a bit more on ebay® or Amazon® but you have a
                lot of hassle with lengthy sales and payment times, customer
                support or returns and then there are still selling fees, We cut
                all that out at lego2sell.com and just give you the dosh within
                a day or two!
              </p>
              <h2
                className="text-red-500 text-2xl py-4 font-bold"
                id="thewebuybricksdifference"
              >
                The lego2sell.com Wow Factor
              </h2>
              <h4
                className="text-green-500  text-2xl py-4 font-bold"
                id="sustainability"
              >
                Speed and simplicity
              </h4>
              <p>
                We want to make selling your new LEGO® sets as quick and easy as
                possible. That’s why we put such a big focus on speed and
                simplicity. Our straightforward selling process, allows you to
                put in a code, find your set, accept the price and send it in
                simples.
              </p>
              <p>
                We also give you up to £2.49 for the cost of the postage for all
                LEGO® sets we accept, how about that one hey!
              </p>

              <h4
                className="text-green-500 text-2xl py-4 font-bold"
                id="speedandsimplicity"
              >
                Customer satisfaction
              </h4>
              <p>
                This is a big one for us! Our entire operation is
                customer-focused, with you in mind every step of the way. We
                place the utmost importance on ensuring that our customers have
                the best experience possible whilst using our website. That’s
                why your feedback means so much to us! We’d love to hear what
                you like about our service and if there’s any room for
                improvement.
              </p>
            </div>
            <button className="text-xl border duration-300 hover:bg-white hover:border hover:text-black font-bold px-6 py-4 my-6 rounded-xl bg-blue-500 text-white ">
              How its Works ?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
