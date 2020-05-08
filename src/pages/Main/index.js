import React from 'react';
import { Dashboard, Container, SideMenu, Menu, Logout, Painel, FilterForm, List } from './styles';
import Button from '../../styles/components/Button';
import Avatar from '../../styles/components/avatar';
import CustomizedTables from './componentes/Tabela';

const Main = () => (
    <Dashboard>
        <SideMenu>
            <Avatar><img src="https://lh3.googleusercontent.com/YdvOB4QuCYiahiPuShuiM22suxJuz2sA5EtF7gkqpM1AgTUKpsETW37OEZqnOaZOBswsYaXBeD_rmtuBQVCUwg5nRv63WbOPcGdmI2iTtRRgSrMh-Kx4R9kwC9LEnWcDiGlABEbDNC5_T-X-KIhb9NQJXCqOucUygW56O7Yud2w5FpPgWtorvtX1ogEtrvtunjm7o_MjVzIaXUpO50F_QjSa9pyzdJf1SFzSL9JNrkxb94LpCbgFWEZsoS_Lb-2jzPkp1e8zge4X9usOVyjFM2EJS4fyLg80iOTPMCC4DkuyGsUH4MIvpb6mBPRswIEaYFTL_GtdJzbHnErbKWg41iB8oRK5OIFLxeA3kCBXuJr7ZM9ZWeK0whhQq3hmyhC_jnNNZWplig25CrgE9qrUS4fMlq72QnhPt5ful0voAG3DTp0fR1ZU89rQYlh2ux1L62duHAYdZpGI12q8GmKJRoUV6oLNhAR9gVI1Ob_-SSqkMr6lTx59m09AgrN9gxEps9lzpF4353DL-pKbsc7Ty2LFlqYunllNC0uwerCHQyVEU_a0zvTemDvyLSji0788zAK6wEbL2wA_NPPGj9VWtm9Rg_8e-iaGsubGGagmvOF377nlOdkO-WAUxdc8NQx9SpLNrh8i4Fkdz581E2SJkoZGmALxOKObPRC7_McGXsWOaqvWr9Z7molNh-jp=w600-h601-no?authuser=0" /></Avatar>
            <h1>Fernando</h1>
            <Menu>
                <Button color="danger">Pedidos<i class="material-icons">add</i></Button>
                <Button color="danger">Produtos<i class="material-icons">shopping_cart</i></Button>
                <Button color="danger">Perfil<i class="material-icons">person</i></Button>
            </Menu>
            <Logout><Button>Logout<i class="material-icons">arrow_back</i></Button></Logout>


        </SideMenu>
        <Container>
            <Painel>
                <FilterForm>
                    <h1>Filtros</h1>
                    <div>
                        <span>Fabricante: </span>
                        <input type="autocomplete" name="Fabricante" />
                    </div>
                    <div>
                        <span>Fornecedor: </span>
                        <input type="autocomplete" name="fornecedor" />
                    </div>
                    <div>
                        <span>Grupo: </span>
                        <input type="autocomplete" name="grupo" />
                    </div>
                    <Button><i class="material-icons">flash_on</i></Button>
                </FilterForm>
                <List>
                    <div><strong>Produtos</strong></div>
                    <CustomizedTables></CustomizedTables>
                </List>
            </Painel>
        </Container>
    </Dashboard>
);

export default Main;