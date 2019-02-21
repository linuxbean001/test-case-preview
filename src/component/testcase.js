import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import './testcase.css';
import Button from 'react-bootstrap/Button';
class TestCase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imagePreviewUrl: '',
            bannerHeadingText: '',
            callToActionText: '',
            fields: []
        }
        this.imageChange = this.imageChange.bind(this);
    }

    imageChange(e) {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result,
            });
            
        }
        reader.readAsDataURL(file)
    }

    textValueChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields: fields });
        console.log('hjhh', this.state.fields);
    }

    _downloadTxtFile = () => {
        var element = document.createElement("a");
        var file = new Blob(['<div><div style="border: 1px solid #ccc;margin-left: 380px ;margin-right:545px;height: 305px;"> <div style="border: 1px solid #ccc; margin:10px"> <img  style="width:100%"src="' + document.getElementById('imageUrlBase64').value + '"/></div> <div> <h4 style="text-align:center">' + document.getElementById('bannerHeadingText').value + ' </h4></div><div style="float:right" ><button style="width:135px; height:40px; color:#212529; background-color: white  ">' + document.getElementById('callToActionText').value + '</button></div></div></div>'], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.html";
        element.click();
    }



    render() {
        return (
            <div >

                <div className="container" style={{ width: '25%' }}>

                    <input type="file" className="top-margin ,width-percentage" placeholder="Image File Uploader" onChange={this.imageChange}></input> <br />
                    <input type="text" className="top-margin width-percentage" placeholder="Banner Heading Text" name="bannerHeadingText" id="bannerHeadingText" onChange={this.textValueChange.bind(this, "bannerHeadingText")}></input> <br />
                    <input type="text" className="top-margin width-percentage" placeholder="Call To Action Text" name="callToActionText" id="callToActionText" onChange={this.textValueChange.bind(this, "callToActionText")}></input> <br />
                    <input type="hidden" id="imageUrlBase64" value={this.state.imagePreviewUrl}></input>
                    <Button style={{ marginTop: '10px', width: '30%', color: '#212529', borderColor: '#212529', backgroundColor: 'white' }} onClick={this._downloadTxtFile}>Export</Button>

                    <Card className="top-margin card-padding" >
                        <Card>
                            {this.state.imagePreviewUrl ? <CardImg top width="100%" src={this.state.imagePreviewUrl} alt="Card image cap" /> : <Card className="card-height"   >
                                <CardTitle>Banner Image</CardTitle>
                            </Card>}
                        </Card>
                        {this.state.fields.bannerHeadingText ? <h6 className="top-margin text-align">  {this.state.fields.bannerHeadingText} </h6> : <h6 className="top-margin text-align"> Banner Heading</h6>}<br />
                        {this.state.fields.callToActionText ? <div><Button className="export-button "> {this.state.fields.callToActionText} </Button> </div> : <div><Button className="export-button "> Call To Action </Button> </div>}<br />
                    </Card>

                </div>


            </div>
        );
    }
}

export default TestCase;
