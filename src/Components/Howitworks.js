import React from 'react'
import "./Howitworks.css"
import caa from "../Assets/Create-an-acc.png"
import dot from "../Assets/howitworks-dotted-line.png"
import uuf from "../Assets/Uploadurfile.png"
import sfi from "../Assets/Sharefileinstantly.png"
import indi from "../Assets/card-indi.png"
import busi from "../Assets/card-busi.png"
import business from "../Assets/busi-img.png"
const Howitworks = () => {
  return (
    <div className='Howitworks-container'>
        <h2 className='Howitworksh2'>How it works?</h2>
        <p className='Howitworksp'>Techne removes complexity and offers a simple interface that allows users to take advantage of the vast array of decentralized storage with better security, performance, and pricing.</p>
        <div className='Features-container-howitworks'>
        <div className='create-acc'>
            <img className='caa-img' src={caa} alt='yu'></img>
            <h2 className='create-acc-h2'>Create an account</h2>
            <p className='create-acc-p-1'>Create an Techne account and start uploading your files to Decentralized Storage.</p>
        </div>
        <img className='Howitworks-dotted-greyline' src={dot} alt='yt'></img>

        <div className='upload-your-file'>
            <img className='uuf-img' src={uuf} alt='yu'></img>
            <h2 className='create-acc-h2'>Upload your files</h2>
            <p className='create-acc-p-1'>Your file is encrypted and split into pieces then distributed to the nodes around the world.</p>
        </div>
        <img className='Howitworks-dotted-greyline' src={dot} alt='yt'></img>
        <div className='upload-your-file'>
            <img className='uuf-img' src={sfi} alt='yu'></img>
            <h2 className='create-acc-h2'>Share file instantly</h2>
            <p className='create-acc-p-1'>Send your file via email or shareable link with password protect and expiration time.</p>
        </div>
        </div>

        <div className='second-last-part'>
          <div className='howitworks-content'>
            
            <div className='written-content'>
              <h2 className='slp-h2'>Ready to get started?</h2>
              <p className='slp-p'>File storage and sharing on decentralized storage that suits any business size.</p>
            </div>
            <button className='howitworks-button'>Create an account</button>
          </div>

          <div className='last-cards'>
            <button className='last-cards-individual'>
              <img className='last-cards-individual-img' src={indi} alt='yooj'></img>
              <h2 className='last-cards-individual-h2'>Are you an individual?</h2>
              <p className='last-cards-individual-p'>Syncing, backing up, and sharing your photos, videos and documents in total privacy couldn’t be easier.</p>
              <a className='last-cards-individual-a' href='www.google.com'>Start now</a>
            </button>
            <button className='last-cards-business'>
              <img className='last-cards-business-img' src={busi} alt='yooj'></img><br></br>
              <h2 className='last-cards-business-h2'>Are you business?</h2>

              <p className='last-cards-business-p'>Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all in one place on decentralized network.</p>
              <img className='business-image' src={business} alt='qwe'></img>
              <a className='last-cards-business-a' href='www.google.com'>See Pricing</a>
              
            </button>
          </div>
        </div>
    </div>
  )
}

export default Howitworks
