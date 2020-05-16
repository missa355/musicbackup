import React from 'react'
import Upload from "../../components/upload_block/Upload"
import "./Upload_page.css"
import Navbar from "../../components/side_burger"

export default function upload_page() {
    return (
            <div className="upload_page">
                <Navbar></Navbar>

                <div className="Card">
                    <Upload />
                </div>
      </div>
    )
}
