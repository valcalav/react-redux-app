
function AddButton() {
    return (
        <form className='add-form'>
            <select id='select-day'>
                <option value='monday'>Monday</option>
                <option value='tuesday'>Tuesday</option>
                <option value='wednesday'>Wednesday</option>
                <option value='thursday'>Thursday</option>
                <option value='friday'>Friday</option>
                <option value='saturday'>Saturday</option>
                <option value='sunday'>Sunday</option>
            </select>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddButton