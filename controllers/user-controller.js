

class UserController {

    constructor(userService) {
        this.userService = userService;
    }

    register = async (req, res) => {
        return res.status(200).json({ 
            data: await this.userService.register(req.body) 
        });
    }
    
    login = async (req, res) => {
        return res.status(200).json({ 
            data: await this.userService.login(req.body) 
        });
    }

    profile = async (req, res) => {
        return res.status(200).json({ 
            data: `Tu email leído en tu token es: ${req.dataToken.userEmail}`
        });
    }
}


export default UserController;