import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Backend server URL

export const getJobs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/jobs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching jobs:", error);
    }
};

export const applyToJob = async (jobId, userId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/applications`, {
            job_id: jobId,
            user_id: userId
        });
        return response.data;
    } catch (error) {
        console.error("Error applying to job:", error);
    }
};
