import React from "react";
import PropTypes from "prop-types";
import { useQuality } from "../../../hooks/useQuality";
const Quality = ({ id }) => {
    const { isLoading, getQuality } = useQuality();
    const quality = getQuality(id);

    if (!isLoading) {
        return (
            <span className={"badge m-1 bg-" + quality.color} key={quality._id}>
                {quality.name}
            </span>
        );
    }
    return "Loading ....";
};

Quality.propTypes = {
    id: PropTypes.string.isRequired
};

export default Quality;
