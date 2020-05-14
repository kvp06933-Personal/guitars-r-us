import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guitars: [
                {
                    id: 0,
                    name: 'Acoustic',
                    image:'assets/images/AcousticTanLight.jpeg',
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla felis in lobortis sodales. Donec at tincidunt nibh. Praesent a neque ultricies eros aliquam dapibus. Pellentesque ac libero dignissim, cursus quam non, feugiat lorem. Fusce volutpat vitae odio sed hendrerit. Integer eget nulla augue. Quisque mattis ipsum at tellus suscipit malesuada. Aenean pulvinar volutpat dolor at molestie. Cras ut aliquet elit. Praesent rutrum velit at nunc tincidunt, nec mollis nunc dapibus. Donec dapibus nisi vel erat vulputate, ac fermentum massa vulputate. Vivamus placerat tortor a leo scelerisque, sit amet auctor ipsum fermentum. Ut commodo congue mi."
                },
                {
                    id: 1,
                    name: 'Electric',
                    image:'assets/images/AcousticTanLight.jpeg',
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla felis in lobortis sodales. Donec at tincidunt nibh. Praesent a neque ultricies eros aliquam dapibus. Pellentesque ac libero dignissim, cursus quam non, feugiat lorem. Fusce volutpat vitae odio sed hendrerit. Integer eget nulla augue. Quisque mattis ipsum at tellus suscipit malesuada. Aenean pulvinar volutpat dolor at molestie. Cras ut aliquet elit. Praesent rutrum velit at nunc tincidunt, nec mollis nunc dapibus. Donec dapibus nisi vel erat vulputate, ac fermentum massa vulputate. Vivamus placerat tortor a leo scelerisque, sit amet auctor ipsum fermentum. Ut commodo congue mi."
                },
                {
                    id: 2,
                    name: 'Accessories',
                    image:'assets/images/AcousticTanLight.jpeg',
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla felis in lobortis sodales. Donec at tincidunt nibh. Praesent a neque ultricies eros aliquam dapibus. Pellentesque ac libero dignissim, cursus quam non, feugiat lorem. Fusce volutpat vitae odio sed hendrerit. Integer eget nulla augue. Quisque mattis ipsum at tellus suscipit malesuada. Aenean pulvinar volutpat dolor at molestie. Cras ut aliquet elit. Praesent rutrum velit at nunc tincidunt, nec mollis nunc dapibus. Donec dapibus nisi vel erat vulputate, ac fermentum massa vulputate. Vivamus placerat tortor a leo scelerisque, sit amet auctor ipsum fermentum. Ut commodo congue mi."
                }
            ]
        };
    }

    render() {

        const directory = this.state.guitars.map(guitar => {
            return(
                <div className="col">
                    <img src={guitar.image} alt={guitar.name} />
                    <h2>{guitar.name}</h2>
                    <p>{guitar.description}</p>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;