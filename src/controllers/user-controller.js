

class UserController {

    constructor(userService) {
        this.userService = userService;
    }

    register = async (req, res) => {
        const response =  await this.userService.register(req.body);
        if (response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    }
    
    login = async (req, res) => {
        const { email, password } = req.body;
        const response = await this.userService.login({ email, password });
        if (response.success) {
            res.cookie('accessToken', response.accessToken, { httpOnly: true, secure: true });
            res.cookie('refreshToken', response.refreshToken, { httpOnly: true, secure: true });
            return res.status(200).json(response);
        } else {
            return res.status(401).json(response);
        }
    }

    profile = async (req, res) => {
        return res.status(200).json({ 
            data: `Tu email leído en tu token es: ${req.dataToken.email}`
        });
    }

    generateToken = async (req, res) => {
        const response = await this.userService.generateToken(req.cookies);
        res.cookie('accessToken', response.accessToken, {
            httpOnly: true,
          secure: true,
          });
        return res.status(200).json({ 
            data: { message: response.message, success: response.success }
        });
    }

    changePassword = async (req, res) => {
        const response = await this.userService.changePassword(req.body);
        if (response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    }

    recoverPassword = async (req, res) => {
        const response = await this.userService.recoverPassword(req.body);
        if (response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    }
}


export default UserController;