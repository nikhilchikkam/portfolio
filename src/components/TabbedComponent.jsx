/* eslint-disable react/prop-types */
const TabbedComponent = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-white bg-[#23272f] border border-textPara shadow-md rounded-full px-5 py-2 transition-all duration-200 ease-in-out"
        : "text-[#ADB7BE] border border-transparent rounded-full px-5 py-2 hover:bg-[#23272f] hover:text-white hover:border-textPara transition-all duration-200 ease-in-out";

    return (
        <button onClick={selectTab} className="focus:outline-none">
            <p
                className={`mr-3 font-semibold text-lg ${buttonClasses}`}
            >
                {children}
            </p>
        </button>
    );
};

export default TabbedComponent;
