import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>CUSTOMISATION INCLUDED VENUES</h2>
                    <p>Come experience the very pinnacle of luxury all-inclusive venues for weddings at WeddingKnots. Our luxurious venues, set along the most gorgeous exotic and exquisite locations in Goa, Rajasthan, Kerala, Mumbai and Gujarat, feature unlimited gourmet dining, unique bars serving premium liquors and wines, including complimentary music system® all customisable at our venues. If you are planning a wedding, WeddingKnots is your perfect choice.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '0.1rem' }} />
                            </div>
                            <div>
                                <h3>Crafting Dream Weddings</h3>
                                
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">Your Personal Wedding Planner</h4>
                        <p className="timer">available at your fingertips!</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Stardust Banquets,Goa</option>
                                <option value="1">Grenda Banquets, Mumbai</option>
                                <option value="1">Narayani Hall, Mumbai</option>
                                <option value="1">Radisson Resort, Kerala</option>
                                <option value="1">Marriott Resort, Gujarat</option>
                                <option value="1">Cosmos Resort, Goa</option>
                                
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
