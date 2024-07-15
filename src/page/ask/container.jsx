import { Button, Card, Input, MenuItem, Select, TextField } from "@mui/material"
import React, { useState } from "react"

export default function Container() {

    const [age, setAge] = useState("");
    const [gender, setGender] = useState("남자");
    const [health, setHealth] = useState("주 1회");
    const [status, setStatus] = useState("");
    
    const ageHandleChange = (e) => {
        setAge(e.target.value);
    };
    const genderHandlerChange = (e) => {
        setGender(e.target.value);  
    };
    const healthHandlerChange = (e) => {
        setHealth(e.target.value);  
    };
    const statusHandlerChange = (e) => {
        setStatus(e.target.value);  
    };
    const handleBtnClick = () => {
        const query = `나이는 ${encodeURIComponent(age)}세,
            성별은 ${encodeURIComponent(gender)},
            운동은 ${encodeURIComponent(health)},
            기타 특이사항은 ${encodeURIComponent(status)}`;
        console.log(query);
    }

    return (
        <div className="container Flex mt-32 text-center">
            <Card className="w-2/3 mx-auto p-8">
                <div>
                    <div className="flex">
                        <label className="font-semibold mr-4 w-20"> 나이 </label>
                        <Input className="w-full" 
                                placeholder="나이를 입력해주세요"
                                type="number"
                                onChange={ageHandleChange}
                                />
                    </div>
                    <div className="flex mt-4">
                        <label className="font-semibold mr4 w-20"> 성별 </label>
                        <Select className="w-full" onChange={genderHandlerChange}>
                            <MenuItem value="남자"> 남자 </MenuItem>
                            <MenuItem value="여자"> 여자 </MenuItem>
                        </Select>
                    </div>
                    <div className="flex mt-4">
                        <label className="font-semibold mr4 w-20"> 운동 </label>
                        <Select className="w-full" onChange={healthHandlerChange}>
                            <MenuItem value="주 1회"> 주 1회 </MenuItem>
                            <MenuItem value="주 2회"> 주 2회 </MenuItem>
                        </Select>
                    </div>
                    <div className="flex mt-4">
                        <label className="font-semibold mr4 w-20"> 기타 </label>
                        <TextField
                            className="w-full"
                            placeholder="건강 상태를 입력해주세요"
                            multiline
                            maxRows={4}
                            onChange={statusHandlerChange}
                            />
                    </div>
                    <div className="flex mt-6">
                        <Button className="w-full"
                                variant="contained"
                                color="primary">
                            전송하기
                        </Button>
                            
                    </div>                                        
                </div>
            </Card>
        </div>
    )
}