import React from "react";
import "./Decentralized.css";
import dn from "../Assets/dn1.png"
import wa from "../Assets/wa1.png"

const Decentralized = () => {
  return (
    <div className="decentral-container">
        <div className="de-left-side">
            <h2 className="h2de-header">Decentralized<br></br> storage built for<br></br> <span className="purple-h2de-header">better privacy</span>.</h2>
            <p className="pde-header">Store data securely on over 13k nodes worldwide instead of just a<br></br> few vulnerable data centers with privacy. Every file is encrypted,<br></br> split into pieces, and stored on a global network of nodes,<br></br> making data breaches and downtime a thing of the past.</p>
            <div className="de-card-container">
                <div className="de-card-uys">
                    <div className="de-uys-img"></div>
                    <h2 className="de-h2uys">Upgrade Your Storage</h2>
                    <p className="de-puys">Better security, performance and<br></br> cost, Techne is the better way to store<br></br> data.</p>   
                </div>
                <div className="de-card-cns">
                    <div className="de-cns-img"></div>
                    <h2 className="de-h2cns">Carbon Neutral Storage</h2>
                    <p className="de-pcns">Utilizing existing unused storage<br></br> capacity on recycled hardware around<br></br> the world.</p>   
                </div>
            </div>
        </div>


        <div className="de-right-side">
            <div className="de-card-pbd">
                <div className="de-pbd-img"></div>
                    <div className="de-pbd-content">
                    <h2 className="de-h2pbd">Private by design</h2>
                    <p className="de-ppbd">We believe data privacy is a human right, which is<br></br> why Techne is built on a decentralized architecture<br></br> that makes data breaches a thing of the past.</p>
                    </div>   
            </div>
            <div className="de-card-dn">
                <img className="de-dn-img" src={dn} alt="yup"></img>
                <div className="de-dn-content">
                <h2 className="de-h2dn">Distributed Network</h2>
                <p className="de-pdn">An object is never in one place. Data is split into 80<br></br> pieces, and distributed to uncorrelated Nodes. When<br></br> you call for the data, it’s automatically reconstituted<br></br> in an instant.</p>
                </div>   
            </div>
            <div className="de-card-wa">
                <img className="de-dn-img" src={wa} alt="yup"></img>
                <div className="de-dn-content">
                <h2 className="de-h2dn">Worldwide availability</h2>
                <p className="de-pdn">Data is stored on Nodes that are selected by<br></br> reputation and local latency. The fastest Nodes from<br></br> this set are chosen to store pieces, ensuring quick<br></br> access to your data.</p>
                </div>   
            </div>
        </div>
        
    </div>
  )
}

export default Decentralized
