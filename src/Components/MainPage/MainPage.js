import { Box, Button, Grid, IconButton, Typography } from "@material-ui/core";
import './style.css'
import {
    renderItems,
    screenItems,
    textFields,
} from "./config";
import Constants from "../../helpers/Constants";
import CustomTextField from "../Common/CustomTextField/CustomTextField";
import { ReactComponent as Upload } from "../../assests/images/upload.svg";
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from "react";
import { useFormik } from "formik";
import dayjs from "dayjs";


const MainPage = () => {

    const formik = useFormik({
        initialValues: {
            issue: '',
            choices1: '',
            choices2: '',
            choices3: '',
            file: null,
            deadline: dayjs(new Date())
        },
    })
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        formik.setFieldValue('file', fileUploaded)
    };

    return (
        <Box className={'main-box'}>
            {screenItems.map((item) => {
                return (
                    <Grid container className={'container'}>
                        <Grid item>
                            <h3 className='item-title'>{item.title}</h3>
                        </Grid>
                        <Grid item className='item-box'>
                            {renderItems(item.items, item.type, item.checkListType)}
                        </Grid>
                    </Grid>
                );
            })}
            <Grid container className={'fields-Box'}>
                {textFields.map(item => {
                    return (
                        <Grid item key={item.name}>
                            <CustomTextField
                                label={item.label}
                                isMultiline={item?.isMultiline}
                                name={item.name}
                                onChange={formik.handleChange}
                                value={formik.values[item.name]}
                            />
                        </Grid>
                    );
                })}
                <Grid item>
                    <Typography>{Constants.doc}</Typography>
                    <IconButton aria-label="upload" type="file" >
                        <Upload onClick={handleClick} />
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            name="file"
                        />
                        <div>{formik.values.file && `${formik.values.file?.name}`}</div>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container className='container'>
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <h4 className="item-title">{Constants.deadline}</h4>
                        <MobileDateTimePicker
                            defaultValue={formik.values.deadline}
                            onChange={(date)=> formik.setFieldValue('deadline', dayjs(date))}
                            name='deadline' />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Grid container className='buttons-box'>

                <Button
                    variant={'contained'}
                    color={'primary'}
                    className={'button-end'}
                    onClick={(e) => {
                        formik.setFieldValue('deadline', dayjs(new Date()))
                        formik.resetForm()
                    }}
                >{Constants.delete}
                </Button>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    className={'button-end'}
                >{Constants.save}
                </Button>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    className={'button-end'}
                >{Constants.submit}
                </Button>

            </Grid>

        </Box >
    )
}

export default MainPage;