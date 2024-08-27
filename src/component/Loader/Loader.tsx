import loadingCar from '../../assets/images/cars/loadingCar.png';
import './Loader.css'

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-900">
            <div className="flex items-center space-x-2">
                <p className="text-7xl font-thin text-white animate-pulse">L</p>
                <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin border-blue-500"></div>
                <p className="text-7xl font-thin text-white animate-pulse">ading</p>
                <span className="text-7xl font-thin text-blue-500 animate-bounce">...</span>
            </div>
            <p className="mt-5 text-xl text-gray-400 animate-pulse">
                Please wait, we're loading your data.
            </p>
            <div className="w-full flex justify-center overflow-hidden mt-8">
                <img
                    src={loadingCar}
                    alt="Loading Car"
                    className="animate-carMove"
                    style={{ width: '340px', height: '150px' }}
                />
            </div>
        </div>
    );
};

export default Loader;
