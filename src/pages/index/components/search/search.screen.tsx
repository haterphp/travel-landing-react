import {
    Box, Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select, SelectChangeEvent,
    TextField,
    Typography
} from "@material-ui/core";
import Media from "./search.media";
import React, {useState} from "react";

function SearchScreen(){

    const { Image } = Media;

    const [region, setRegion] = useState<string | undefined>("");
    const regionHandleChange = (event: SelectChangeEvent) => setRegion(event.target.value as string);

    const [skillLevel, setSkillLevel] = useState<string | undefined>("");
    const skillLevelHandleChange = (event: SelectChangeEvent) => setSkillLevel(event.target.value as string);

    return (
        <Box width={"100%"} bgcolor={"text.light"} padding={"150px 0"}>
            <Container maxWidth={"xl"}>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <Box marginBottom={5} marginTop={4}>
                            <Typography variant={"h5"}>Поиск</Typography>
                            <Typography variant={"h2"} marginTop={1} marginBottom={3}>Найди путешествие для себя</Typography>
                            <Typography width={"70%"}>Заполните форму и найдите путешествие,
                                о котором вы так мечтали</Typography>
                        </Box>
                        <Box component={"form"}>
                            <FormControl fullWidth margin={"normal"}>
                                <InputLabel id="region-select-booking-form">Регион отдыха</InputLabel>
                                <Select
                                    labelId="region-select-booking-form"
                                    id="demo-simple-select"
                                    value={region}
                                    label="Регион отдыха"
                                    onChange={regionHandleChange}
                                >
                                    <MenuItem value={"river-drifting-katun"}>Сплав по Катуни</MenuItem>
                                    <MenuItem value={"fishing-on-lake-teletskoye"}>Рыбалка на Телецком озере</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        label={"Дата начала похода"}
                                        variant={"outlined"}
                                        type={'date'}
                                        defaultValue={new Date()}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin={"normal"}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label={"Дата окночания похода"}
                                        variant={"outlined"}
                                        type={'date'}
                                        defaultValue={new Date().setDate(new Date().getDate() + 10)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin={"normal"}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                label={"Кол-во участников"}
                                variant={"outlined"}
                                defaultValue={1}
                                margin={"normal"}
                                fullWidth
                            />
                            <FormControl fullWidth margin={"normal"}>
                                <InputLabel id="skill-level-booking-form">Уровень подготовки</InputLabel>
                                <Select
                                    labelId="skill-level-booking-form"
                                    id="demo-simple-select"
                                    value={skillLevel}
                                    label="Уровень подготовки"
                                    onChange={skillLevelHandleChange}
                                >
                                    <MenuItem value={"beginner"}>Начинающий</MenuItem>
                                    <MenuItem value={"middle"}>Средний</MenuItem>
                                    <MenuItem value={"professional"}>Продвинутый</MenuItem>
                                </Select>
                            </FormControl>
                            <Box marginBottom={2}/>
                            <Button variant={"contained"} color={"primary"}>Найти</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={"auto"} lg={6}>
                        <Box component={"img"} src={Image} alt={"image"} display={"inherit"} width={"90%"} marginLeft={"auto"} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default SearchScreen;
