import React from 'react';

export default class LocationForm extends React.Component {

    render() {

        return (
            <div>
                <form>
                    <input name="location" type="text" placeholder="enter your city">
                    </input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

