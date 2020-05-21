import React, { Component } from 'react'
import Audio from 'react-audioplayer';


export class bottom_test extends Component {
    render() {
        return (
            <div>
                <Audio
                width={600}
                height={400}
                autoPlay={true}
                playlist={[]}
                />
            </div>
        )
    }
}

export default bottom_test
