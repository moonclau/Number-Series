import PropTypes from 'prop-types';
const ShowResponse = ({ response }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Resultado</h2>
      <p className="text-xl text-gray-700">{response}</p>
    </div>
  );
}
export default ShowResponse;
ShowResponse.propTypes = {
  response: PropTypes.number,
}