

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
        const { email, password } = req.body;
        const response = await this.userService.login({ email, password });
        if (response) {
            res.cookie('accessToken', response.accessToken, { httpOnly: true, secure: true });
            res.cookie('refreshToken', response.refreshToken, { httpOnly: true, secure: true });
            return res.status(200).json({ message: 'Login successful', response });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    }

    profile = async (req, res) => {
        return res.status(200).json({ 
            data: `Tu email leído en tu token es: ${req.dataToken.email}`
        });
    }

    generateToken = async (req, res) => {
        return res.status(200).json({ 
            data: await this.userService.generateToken(req.body, req.header) 
        });
    }
}


export default UserController;