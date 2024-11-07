import User from "../model/userModel.js";

//create 
export const create = async(req,res) =>{
    try {
        const userData = new User(req.body);
        if( !userData )
        {
            return res.status(404).json({msg : "No user Data found or created"});
        }
        const savedData = await userData.save();

        return res.status(201).json({savedData, msg:"Successfully Added"});
        
    } catch (error) {
        res.status(500).json({ error : error});
    }
   
}

//read 
export const getAll = async(req,res) =>{
    try {
        const userData = await User.find();
        if( !userData )
        {
            return res.status(404).json({msg : "NO user data found"});
        }
        return res.status(200).json({userData});
        
    } catch (error) {
        res.status(500).json({error : error});
        
    }
}

export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const userData = await User.findById(id);
        if( !userData )
            {
                return res.status(404).json({msg : "NO user data found"});
            }
            return res.status(200).json({userData});
        
    } catch (error) {
        return res.status(500).json({error : error});
        
    }

}
//update
export const update = async(req,res)=>{
    try {
        //console.log(req.body);
        const id = req.params.id;
        const userData = await User.findById(id);
       
        if(!userData)
        {
            return res.status(404).json({msg : "No user found"});
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, {new : true, runValidators: true});
        return res.status(200).json({msg: "User Updated Successfully.", updatedData});
        
    } catch (error) {
        return res.status(500).json({error: error});
    }
}
//deleteUser
export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user)
        {
            return res.status(404).json({msg : "No user found"}); 
        }
        const userData = await User.findByIdAndDelete(id);
        return res.status(200).json({ msg : "User deleted Successfully"});
        
    } catch (error) {
        return res.status(500).json({error : error.msg});
    }
}