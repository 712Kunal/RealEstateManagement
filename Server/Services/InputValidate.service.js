
// INPUT VALIDATION FOR THE INPUTS
const validateInput = (schema) => (req, res, next) => {
  try {
    const validatedData = schema.safeParse(req.body);

    if (!validatedData.success) {
      return res.status(400).json({ message: "Input fields must be valid" });
    }

    req.validatedInputs = validatedData.data;
    next();
  } catch (error) {
    console.error(`Input Validation Error => ${error}`);
    res.status(400).json({ message: "Input fields must be valid" });
  }
};

export default validateInput;
