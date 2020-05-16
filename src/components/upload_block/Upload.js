import React, { Component } from "react";
import Dropzone from "../dropzone/Dropzone";
import "./Upload.css";
import Progress from "../progress/Progress";
import Check from "../checkbox"
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import PickBox from "../pick_box"

var file_counter = 0;
var id_lst = ["track1", "track2", "track3"]

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  pick = (chosen)=>{
    console.log(chosen)

  }

  onFilesAdded(files) {

    file_counter += files.length;
    if(file_counter > 3){
      alert("You are only allowed to upload a maximum of 3 files");
      return;
  }
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    var curr = 0
    this.state.files.forEach(file => {
      var value = document.getElementById(id_lst[curr]).value
      // file.name = value;
      // console.log(file.name)
      promises.push(this.sendRequest(file, value));
      curr +=1;
    });
    try {
      await Promise.all(promises);

      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  sendRequest(file, song_name) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });
      console.log(song_name)

      const formData = new FormData();
      formData.append("file", file);
      var contenttype = {
        headers : {
            "content-type" : "multipart/form-data"
        }
    }

      var retrievedObject = localStorage.getItem("chosen_playlists")
      var chosen_playlists = JSON.parse(retrievedObject)
      // upload audio file to server


      console.log(chosen_playlists.gilad)

      console.log(formData)
      axios.post("http://localhost:5000/upload", formData, contenttype)    
      .then(res => console.log(res))
      
      // uploads name of the file which consequnly uploads the directry to the mongodb collection
 
      // const track_info = {name:song_name.toLowerCase().split(" ").join("")}
      // axios.post("http://localhost:5000/track/add", track_info)    
      // .then(res => console.log(res))
      
      if(song_name.includes(".mp3") === true){
        const track_info = {name:song_name}
        axios.post("http://localhost:5000/track/add", track_info)    
        .then(res => console.log(res))
        
    }
      if(song_name.includes(".mp3") === false){
        const track_info = {name:song_name.concat(".mp3")}
        console.log(track_info.name)
        axios.post("http://localhost:5000/track/add", track_info)    
        .then(res => console.log(res))
      }

    });
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="done"
            src="baseline-check_circle_outline-24px.svg"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }


  renderActions() {
      return (
        <div>
          <Check></Check>
          <button
            onClick={() =>
              this.setState({ files: [], successfullUploaded: false })
            }
          >
            Clear
          </button> 
          <button
            disabled={this.state.files.length < 0 || this.state.uploading}
            onClick={this.uploadFiles}
          >
            Save
          </button>
          <PickBox/>
        </div>
      );
  }

  render() {
    return (
      <div className="Upload">
        <span className="Title"></span>
        <div className="Content">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <div className="Files">
            {this.state.files.map((file, i) => {
              return (
                 <div key={file.name} className="Row">
                    <span className="Filename">
                      <TextField fullWidth required id={id_lst[i]} variant="filled" label="Trackname" defaultValue={file.name} />
                    </span>
                    {this.renderProgress(file)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Actions">{this.renderActions()}</div>
      </div>
    );
  }
}

export default Upload;