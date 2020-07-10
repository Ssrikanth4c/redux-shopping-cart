import React from 'react'
import { connect } from 'react-redux'
import {addProducts} from '../redux/action'

class Products extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            price:'',
            category:'',
            img:'',
            id:'',
            description:''
        }
    }
    handleChange=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    render(){
        // console.log(this.state)
        const {addProducts}=this.props
        return(
            <div className='container'>
            <div className="container m-2 mx-5 border border-info justify-content-center" >
                <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="restName">Product Id</label>
                        <input type="number" 
                            
                            name='id' 
                            className="form-control" 
                            onChange={this.handleChange}
                            />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="restName">product name</label>
                        <input type="text" 
                            // value={name} 
                            name='name' 
                            className="form-control" 
                            onChange={this.handleChange}
                            />
                      </div>
                      
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="img">image_url</label>
                        <input type="text" 
                            // value={img} 
                            name='img' 
                            className="form-control" 
                            onChange={this.handleChange}
                            />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="foodItem">Category</label>
                        <input type="text" 
                            className="form-control" 
                            // value={category}
                            name='category'
                            onChange={this.handleChange}
                            />
                      </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="price">Item Price</label>
                            <input type="number" className="form-control"
                                // value={price}
                                name='price'
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="price">description</label>
                            <input type="text" className="form-control"
                                // value={description}
                                name='description'
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type="submit" 
                            className="btn btn-primary mb-2"
                            onClick={(e)=>{
                                e.preventDefault()
                                // console.log(this.state)
                                addProducts(this.state)}
                            }
                            >Submit
                        </button>
                    </div>
                </form>
                
            </div>
          </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    addProducts: payload=>dispatch(addProducts(payload))
})
export default connect(null, mapDispatchToProps) (Products)